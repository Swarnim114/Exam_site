import React from 'react';
import '../styles/Modal.css';



const ConfirmModal = ({ onConfirm }) => {
    return (
      <div className="modal">
        <h2>Start the Exam</h2>
        <p>Once you start the exam, you must stay in full-screen mode to avoid termination.</p>
        <button onClick={onConfirm}>Start Exam</button>
      </div>
    );
  };

  export default ConfirmModal;
