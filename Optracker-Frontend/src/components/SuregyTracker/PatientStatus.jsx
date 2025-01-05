import React from 'react';

export default function PatientStatus() {
  return (
    <div className="patient-status">
      <div className="status-header">
        <div className="status-title">En Cirujia</div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
      <div className="estimated-time">
        Tiempo restante estimado : 3 horas
      </div>
      <div className="location">
        Ubicación : Sala de cirugía
      </div>
      <style jsx>{`
        .patient-status {
          width: 960px;
          padding: 16px;
          margin-bottom: 32px;
        }
        .status-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .status-title {
          color: #121417;
          font: 500 16px "Public Sans", sans-serif;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #DBE0E5;
          border-radius: 4px;
          margin-bottom: 12px;
        }
        .progress-fill {
          width: 38%;
          height: 100%;
          background-color: #121417;
          border-radius: 4px;
        }
        .estimated-time {
          color: #61788A;
          font: 400 14px "Public Sans", sans-serif;
          margin-bottom: 8px;
        }
        .location {
          color: #000000;
          font: 700 20px/1.2 "Public Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}