import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';


const Timer = ({ totalTime , currentTime}) => {
    const [remainingTime, setRemainingTime] = useState(totalTime - currentTime);
    const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
      setRemainingTime(totalTime - currentTime);
  }, [currentTime, totalTime])
  
  useEffect(() => {
      if (remainingTime <= 0) {
        setTimerDone(true);
        setRemainingTime(0);
      }
    }, [remainingTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={styles.timer}>
            {timerDone ? <span>Time's up</span> : <span> {formatTime(remainingTime)}</span>}
        </div>
    );
};

export default Timer;