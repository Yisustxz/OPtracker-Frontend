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
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c6e2780de490355f2de9ab29959a4da6bc5948c8230cfdc44d1e614f47d76?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
                className="password-icon"
                alt=""
              />
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