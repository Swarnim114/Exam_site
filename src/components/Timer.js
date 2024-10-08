import React, { useEffect, useState } from 'react';
import '../styles/Timer.css';

const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div>
      <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
    </div>
  );
};

export default Timer;
