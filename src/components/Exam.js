import React, { useState } from 'react';
import Timer from './Timer';
import ViolationHandler from './Violation';
import ConfirmModal from './Confirmation';
import SuccessModal from './Succes';
import { enableFullScreen } from './Fullscreen';
import '../styles/Exam.css';


const Exam = () => {
    const [isExamStarted, setIsExamStarted] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal

    const startExam = () => {
      enableFullScreen();
      setIsExamStarted(true);
      setShowModal(false);
    };

    const endExam = () => {
      setIsExamStarted(false);
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      setShowSuccessModal(true); // Show the success modal on submit
    };

    const handleCloseSuccessModal = () => {
      setShowSuccessModal(false);
    };

    return (
      <div className="exam-container">
        {showModal && <ConfirmModal onConfirm={startExam} />}
        {isExamStarted && (
          <>
            <h2 className="exam-title">Exam in Progress</h2>
            <Timer onTimeUp={endExam} />
            <button className="submit-button" onClick={endExam}>Submit Exam</button>
            <ViolationHandler endExam={endExam} />
          </>
        )}
        {showSuccessModal && <SuccessModal onClose={handleCloseSuccessModal} />} {/* Render the success modal */}
      </div>
    );
  };

  export default Exam;
