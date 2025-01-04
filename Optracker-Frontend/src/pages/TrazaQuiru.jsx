import React from "react";
import Header from "../components/ui/Header"; // Importa el Header

function TrazaQuiru() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "100%", margin: "0", padding: "0" }}>
      <Header /> {/* Header fijo */}

      {/* Margen superior para evitar superposición con el header */}
      <div style={{ marginTop: "80px", padding: "0 50px" }}>
        {/* Título principal */}
        <section style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "60px", fontWeight: "bold", margin: "0" }}>007</h1>
        </section>

        {/* Equipo quirúrgico */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-around", // Distribuye los elementos uniformemente
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          {/* Cirujano principal */}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/100"
              alt="Cirujano principal"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "block", // Asegura que esté centrado
                margin: "0 auto 10px", // Centra la imagen
              }}
            />
            <p style={{ fontWeight: "bold", fontSize: "18px", margin: "5px 0" }}>Cirujano principal</p>
            <p style={{ fontSize: "16px", color: "#666" }}>Dr. John Doe</p>
          </div>

          {/* Enfermera anestesista */}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/100"
              alt="Enfermera anestesista"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "block", // Asegura que esté centrado
                margin: "0 auto 10px", // Centra la imagen
              }}
            />
            <p style={{ fontWeight: "bold", fontSize: "18px", margin: "5px 0" }}>
              Enfermera anestesista
            </p>
            <p style={{ fontSize: "16px", color: "#666" }}>Dr. Bob Doe</p>
          </div>
        </section>

        {/* Barra de progreso */}
        <section>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Ubicación: Sala de cirugía
          </h3>
          <p style={{ textAlign: "center", fontSize: "16px", color: "#666", marginBottom: "10px" }}>
            En Cirugía
          </p>
          <div
            style={{
              height: "15px",
              background: "#e0e0e0",
              borderRadius: "10px",
              overflow: "hidden",
              width: "90%", // Barra ocupa casi todo el ancho
              margin: "0 auto", // Centra la barra
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                background: "#000", // Línea negra
                borderRadius: "10px",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
          <p style={{ textAlign: "center", fontSize: "16px", marginTop: "10px", color: "#666" }}>
            Tiempo restante estimado: 3 horas
          </p>
        </section>

        {/* Lista de procedimientos */}
        <section style={{ marginTop: "30px", width: "100%" }}>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {[
              { text: "Patient arrives", time: "8:00 AM", checked: true },
              { text: "Pre-surgery", time: "8:30 AM", checked: true },
              { text: "In surgery", time: "9:00 AM", checked: true },
              { text: "Post-surgery", time: "11:00 AM", checked: false },
              { text: "Patient leaves", time: "12:00 PM", checked: false },
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: index < 4 ? "1px solid #ddd" : "none",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly
                    style={{
                      cursor: "pointer",
                      accentColor: "#007bff",
                    }}
                  />
                  <p style={{ fontWeight: "bold", fontSize: "18px", margin: "0" }}>{item.text}</p>
                </div>
                <p style={{ fontSize: "16px", margin: "0", color: "#666" }}>{item.time}</p>
              </li>
            ))}
          </ul>
          <p style={{ textAlign: "center", fontSize: "14px", color: "#999", marginTop: "20px" }}>
            This information is intended for the patient’s family and friends.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TrazaQuiru;
