import React from 'react';
import { IonText } from '@ionic/react';
import { fontSizes, fontWeights } from '../theme/theme';
import './CircularProgress.css';

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage = 0 }) => {
  const validPercentage = Math.min(100, Math.max(0, percentage));
  
  // Determine the color based on the percentage
  const color = validPercentage < 50 
    ? '#EF4444' 
    : validPercentage < 70 
      ? '#F59E0B' 
      : '#34D399';
  
  // Calculate the dash array and offset for the SVG circle
  const circumference = 2 * Math.PI * 45; // 45 is the radius of our circle
  const dashOffset = circumference - (validPercentage / 100) * circumference;
  
  return (
    <div className="circular-progress-container">
      <div className="circle-container">
        <svg className="progress-ring" width="110" height="110">
          <circle 
            className="progress-ring-circle-bg"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="transparent"
            r="45"
            cx="55"
            cy="55"
          />
          <circle 
            className="progress-ring-circle"
            stroke={color}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            strokeWidth="8"
            fill="transparent"
            r="45"
            cx="55"
            cy="55"
          />
        </svg>
        <div className="inner-circle" style={{ backgroundColor: '#1F2937' }}></div>
        <IonText className="percentage-text" style={{ 
          color: 'white', 
          fontSize: fontSizes.xxl,
          fontWeight: fontWeights.bold
        }}>
          {validPercentage}%
        </IonText>
      </div>
      <IonText className="label" style={{ 
        fontSize: '14px', 
        color: 'rgba(255, 255, 255, 0.6)'
      }}>
        Overall Score
      </IonText>
    </div>
  );
};

export default CircularProgress;