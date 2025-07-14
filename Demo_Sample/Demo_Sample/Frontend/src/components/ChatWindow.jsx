import React, { useEffect, useState } from 'react';
import { connectSocket, sendMessage, onMessage } from '../services/socket';
 
export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
 
  useEffect(() => {
    connectSocket();
    onMessage(msg => setMessages(prev => [...prev, msg]));
  }, []);
 
  const handleSend = () => {
    if (!input.trim()) return;
 
    // Your message
    sendMessage(input);
    setMessages(prev => [...prev, { user: 'Me', text: input }]);
    const userInput = input;
    setInput('');
 
    // Simulated bot reply after 1 second
    setTimeout(() => {
      const botReply = generateReply(userInput);
      setMessages(prev => [...prev, { user: 'HR', text: botReply }]);
    }, 1000);
  };
 
  const generateReply = (input) => {
    if (input.toLowerCase().includes('hello')) return 'Hello! How can I assist you today?';
    if (input.toLowerCase().includes('leave')) return 'Leave request noted. Please fill the form.';
    if (input.toLowerCase().includes('po')) return 'You can create a PO from the workflow tab.';
    return "I'm here to help you. Please provide more details.";
  };
 
  return (
    <div style={styles.chatWindow}>
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div key={i} style={styles.message(msg.user === 'Me')}>
            <strong style={styles.username}>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputBar}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
    </div>
  );
}
 
const styles = {
  chatWindow: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  messages: {
    maxHeight: '300px',
    overflowY: 'auto',
    marginBottom: '1rem',
    background: '#f9f9f9',
    borderRadius: '6px',
    padding: '1rem',
  },
  message: (isMe) => ({
    backgroundColor: isMe ? '#daf5ff' : '#e6e6e6',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '8px',
    alignSelf: isMe ? 'flex-end' : 'flex-start',
    maxWidth: '80%',
  }),
  username: {
    marginRight: '6px',
    color: '#333',
  },
  inputBar: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
