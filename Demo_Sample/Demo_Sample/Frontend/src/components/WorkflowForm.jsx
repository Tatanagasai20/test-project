// WorkflowForm.js
import { useState } from 'react';
import { sendWorkflowRequest } from '../services/api';
 
export default function WorkflowForm() {
  const [type, setType] = useState('leave');
  const [data, setData] = useState('');
 
  const handleSubmit = async () => {
    await sendWorkflowRequest(type, data);
    alert('Request Sent');
    setData('');
  };
 
  return (
    <div style={styles.formContainer}>
      <h3 style={styles.heading}>Trigger Workflow</h3>
      <label style={styles.label}>Select Type</label>
      <select style={styles.select} value={type} onChange={e => setType(e.target.value)}>
        <option value="leave">Apply Leave</option>
        <option value="po">Create PO</option>
        <option value="inventory">Update Inventory</option>
      </select>
      <label style={styles.label}>Details</label>
      <textarea
        style={styles.textarea}
        value={data}
        onChange={e => setData(e.target.value)}
        placeholder="Details..."
      />
      <button style={styles.button} onClick={handleSubmit}>Send</button>
    </div>
  );
}
 
const styles = {
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '4px',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '8px',
    marginTop: '6px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '10px',
    width: '100%',
    padding: '10px',
    backgroundColor: '#8BC34A',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
