import React from "react";
import Header from "../components/ui/Header"; // Importa el Header

function InfoPaciente() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "100%", margin: "0", padding: "0" }}>
      <Header /> {/* Header fijo */}

      {/* Margen superior para evitar superposición con el header */}
      <div style={{ marginTop: "80px", padding: "0 50px" }}>
        {/* Título principal */}
        <section style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "bold", margin: "0" }}>
            Cirugía de Maggie Smith (01/06/2022)
          </h1>
        </section>

        {/* Equipo quirúrgico */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          {/* Miembros del equipo quirúrgico */}
          {[
            { role: "Cirujano principal", name: "Dr. John Doe", img: "https://via.placeholder.com/80" },
            { role: "Anestesiólogo", name: "Dr. Jane Doe", img: "https://via.placeholder.com/80" },
            { role: "Asistente de cirugía", name: "Dr. Chris Doe", img: "https://via.placeholder.com/80" },
            { role: "Enfermera anestesista", name: "Dr. Bob Doe", img: "https://via.placeholder.com/80" },
            { role: "Enfermera circulante", name: "Dr. Alice Doe", img: "https://via.placeholder.com/80" },
            { role: "Enfermera circulante", name: "Dr. Alice Doe", img: "https://via.placeholder.com/80" },
          ].map((member, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centra el contenido verticalmente
              }}
            >
              <img
                src={member.img}
                alt={member.role}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <p style={{ fontWeight: "bold", fontSize: "16px", margin: "5px 0" }}>{member.role}</p>
              <p style={{ fontSize: "14px", color: "#666" }}>{member.name}</p>
            </div>
          ))}
        </section>

        {/* Procedimientos */}
        <section style={{ margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr", // Dos columnas
              gap: "20px",
            }}
          >
            {[
              { task: "Patient arrives", person: "Dr. John Doe", icon: "https://via.placeholder.com/40" },
              { task: "Pre-Surgery", person: "Dr. John Doe", icon: "https://via.placeholder.com/40" },
              { task: "Anestesia general", person: "Dr. Jane Doe", icon: "https://via.placeholder.com/40" },
              { task: "Administración de anestesia", person: "Dr. Bob Doe", icon: "https://via.placeholder.com/40" },
              { task: "Monitorización de signos vitales", person: "Dr. Alice Doe", icon: "https://via.placeholder.com/40" },
              { task: "Asistente en incisión", person: "Dr. Chris Doe", icon: "https://via.placeholder.com/40" },
            ].map((procedure, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <img
                  src={procedure.icon}
                  alt={procedure.task}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: "0",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    {procedure.task}
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "14px",
                      color: "#666",
                      textAlign: "left",
                    }}
                  >
                    {procedure.person}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Botón aceptar */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
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

export default InfoPaciente;
