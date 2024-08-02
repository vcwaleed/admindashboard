import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressCircle({ targetPercentage, children }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let progress = 0;
    const increment = targetPercentage / 100; // Calculate the increment value

    const timer = setInterval(() => {
      progress += increment;
      if (progress >= targetPercentage) {
        progress = targetPercentage;
        clearInterval(timer);
      }
      setPercentage(progress);
    }, 10); // Adjust the interval duration for smoother/faster animation

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [targetPercentage]);

  return (
    <div className="relative w-12 h-12">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: '#228B22', // Customize the color of the progress bar
          trailColor: '#d6d6d6',
          strokeLinecap: 'round',
          strokeWidth: 0.1, // Set stroke width to 1px for a very thin line
        })}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default ProgressCircle;
