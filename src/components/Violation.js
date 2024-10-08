import { useEffect, useState } from 'react';
import '../styles/Violation.css';

const ViolationHandler = ({ endExam }) => {
  const [violationCount, setViolationCount] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [isWarningActive, setIsWarningActive] = useState(false);

  const handleExitFullScreen = () => {
    if (document.fullscreenElement === null && !isWarningActive) {
      setViolationCount((prevCount) => {
        const newCount = prevCount + 1;

        if (newCount >= 2) {
          alert('Exam terminated due to multiple exit attempts.');
          endExam();
        } else {
          setIsWarningActive(true);
          startCountdown();
        }

        return newCount;
      });
    }
  };

  const startCountdown = () => {
    setCountdown(10);
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(interval);
          if (!document.fullscreenElement) {
            endExam();
          }
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isWarningActive) {
      document.documentElement.requestFullscreen();
      setIsWarningActive(false);
      setCountdown(10);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleExitFullScreen);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('fullscreenchange', handleExitFullScreen);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [violationCount, isWarningActive]);

  return (
    <>
      {isWarningActive && (
        <div className="violation-warning">
          <p>You exited full-screen mode! Press "Enter" to re-enter full-screen in <span className="countdown">{countdown}</span> seconds or the exam will be terminated.</p>
        </div>
      )}
    </>
  );
};

export default ViolationHandler;
