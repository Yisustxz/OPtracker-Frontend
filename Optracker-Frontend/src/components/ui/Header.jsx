import React from "react";
import logo from "../../assets/logo.png"; // Ruta relativa al logo

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 30px", // Espaciado más amplio
        borderBottom: "1px solid #ddd",
        width: "100%",
        boxSizing: "border-box",
        position: "fixed", // Fija el header en la parte superior
        top: 0,
        left: 0,
        backgroundColor: "#fff", // Fondo blanco para mejor visibilidad
        zIndex: 1000,
      }}
    >
      {/* Logo y Título */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        <h1 style={{ fontSize: "24px", color: "#007bff", margin: 0 }}>OpTracker</h1>
      </div>

      {/* Botón Usuario */}
      <div
        style={{
          fontSize: "20px",
          color: "#000",
          cursor: "pointer",
        }}
      >
        👤
      </div>
    </header>
  );
};

export default Header;
