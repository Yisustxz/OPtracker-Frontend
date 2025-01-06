import React from 'react';
import { SurgeryForm } from '../components/surgeryPage/newSurgery/SurgeryForm';
import Navigation from '@/components/ui/navigation';

export function NewSurgery() {
  return (
    <div className="surgery-container">
      <div className="main-frame">
        <Navigation />
        <main className="content-container" style={{ marginTop: '50px' }}>
          <SurgeryForm />
        </main>
      </div>
      <style jsx>{`
        .surgery-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: start;
          min-width: 1280px;
        }
        .main-frame {
          background-color: #fff;
          display: flex;
          min-height: 800px;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          justify-content: start;
        }
        .content-container {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: center;
          padding: 20px 80px 33px; /* Reducido el padding horizontal */
        }
        .field-input {
          background-color: white;
          border: 1px solid #dbe0e5; /* Borde gris */
          border-radius: 12px;
          font-size: 14px; /* Tamaño de fuente reducido */
          font-family: inherit;
          padding: 10px; /* Padding reducido */
          width: 80%; /* Reducido el ancho del campo de escritura */
        }
      `}</style>
    </div>
  );
}