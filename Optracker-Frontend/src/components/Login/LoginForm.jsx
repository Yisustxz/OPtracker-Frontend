import React from 'react';

export const LoginForm = () => {
  return (
    <form className="login-form-container">
      <h1 className="welcome-text">Bienvenido a OpTracker</h1>
      
      <label htmlFor="email" className="email-label">Correo</label>
      <input
        type="email"
        id="email"
        className="email-input"
        aria-label="Email input"
        required
      />

      <label htmlFor="password" className="visually-hidden">Contraseña</label>
      <div className="password-input-wrapper">
        <div className="password-container">
          <div className="password-input-container">
            <input
              type="password"
              id="password"
              className="password-input"
              placeholder="Contraseña"
              aria-label="Password input"
              required
            />
            <div className="password-icon-wrapper">
              <svg className="h-8 w-8 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="submit-button-wrapper">
        <button type="submit" className="submit-button">
          <span className="submit-text">Ingresar</span>
        </button>
      </div>

      <a href="#" className="forgot-password" tabIndex="0">
        Olvidaste la contraseña?
      </a>
    </form>
  );
};