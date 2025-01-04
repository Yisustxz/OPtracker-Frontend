import React from "react";
import Header from "../components/ui/Header"; // Importa el Header

function Encuesta() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "100%", margin: "0", padding: "0" }}>
      <Header /> {/* Header fijo */}

      {/* Margen superior para evitar superposición con el header */}
      <div style={{ marginTop: "80px", padding: "0 50px", textAlign: "center" }}>
        {/* Título principal */}
        <section style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>
            Satisfacción de los familiares con la atención y la comunicación proporcionadas
          </h1>
        </section>

        {/* Descripción */}
        <section style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "16px", color: "#666", margin: "0 auto", maxWidth: "600px" }}>
            Por favor, evalúe su satisfacción con la atención y la comunicación proporcionadas por la
            aplicación de trazabilidad en tiempo real. Seleccione la opción que mejor describa su experiencia:
          </p>
        </section>

        {/* Escala de satisfacción */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>Muy insatisfecho</p>
          {[1, 2, 3, 4, 5].map((number) => (
            <div
              key={number}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #ddd",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f9f9f9")}
            >
              {number}
            </div>
          ))}
          <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>Muy satisfecho</p>
        </section>

        {/* Botón Aceptar */}
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 30px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Encuesta;
