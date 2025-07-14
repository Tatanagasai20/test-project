import React from 'react';
import ChatWindow from './components/ChatWindow';
import SideNav from './components/SideNav';
import WorkflowForm from './components/WorkflowForm';
import TopBar from './components/TopBar';
import './App.css';
 
export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="main">
        <SideNav />
        <div className="content">
          <ChatWindow />
          <WorkflowForm />
        </div>
      </div>
      <footer className="footer">© 2025 All Rights Reserved</footer>
    </div>
  );
}
 
