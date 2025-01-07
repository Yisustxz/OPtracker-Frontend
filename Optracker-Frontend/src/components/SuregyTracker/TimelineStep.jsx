import React from 'react';

export default function TimelineStep({ icon, title, time }) {
  return (
    <div className="timeline-step">
      <div className="step-icon-container">
        <img src={icon} alt="" className="step-icon" />
        <div className="step-line" />
      </div>
      <div className="step-content">
        <div className="step-title">{title}</div>
        <div className="step-time">{time}</div>
      </div>
      <style jsx>{`
        .timeline-step {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          width: 100%;
          max-width: 960px;
        }
        .step-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
        }
        .step-icon {
          width: 24px;
          height: 24px;
          margin-bottom: 4px;
        }
        .step-line {
          width: 2px;
          height: 32px;
          background-color: #DBE0E5;
        }
        .step-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 12px 0;
        }
        .step-title {
          color: #121417;
          font: 500 16px "Public Sans", sans-serif;
          margin-bottom: 4px;
        }
        .step-time {
          color: #61788A;
          font: 400 16px "Public Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}