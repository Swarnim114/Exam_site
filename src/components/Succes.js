import React from 'react';
import '../styles/Success.css';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal">
      <h2>Submitted Successfully!</h2>
      <p>Your exam has been submitted.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SuccessModal;
