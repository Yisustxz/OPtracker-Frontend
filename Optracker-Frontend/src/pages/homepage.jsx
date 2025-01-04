import React from "react";
import Header from "../components/ui/Header"; // Importa el Header

function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "100%", margin: "0", padding: "0" }}>
      <Header /> {/* Header arriba ocupando todo el ancho */}

      {/* Hero Section */}
      <section
        style={{
          position: "relative", // Para superponer elementos sobre la imagen
          textAlign: "center",
          color: "#fff",
          marginTop: "80px", // Espacio para que el header no tape la imagen
          height: "400px", // Altura ajustada del hero
          overflow: "hidden",
        }}
      >
        {/* Imagen de fondo */}
        <img
          src="https://via.placeholder.com/1200x600" // Cambia por tu imagen real
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Asegura que la imagen se recorte adecuadamente
          }}
        />

        {/* Contenido superpuesto */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo oscuro con transparencia
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "28px", margin: "0 0 10px", fontWeight: "bold" }}>OpTracker</h1>
          <p style={{ margin: "0 0 20px", fontSize: "16px" }}>
            Accede al estado de tu ser querido en tiempo real.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <input
              type="text"
              placeholder="Introduce el código del paciente"
              style={{
                padding: "10px",
                fontSize: "16px",
                width: "300px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#17a2b8",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Consultar estado
            </button>
          </div>
        </div>
      </section>

      {/* Sección de información */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>¿Cómo te ayudamos?</h2>
        <p style={{ fontSize: "18px", color: "#666", maxWidth: "800px", margin: "0 auto 40px" }}>
          Nuestro sistema de trazabilidad quirúrgica te brinda información en tiempo real sobre el estado
          del procedimiento de tu ser querido. Podrás conocer cada etapa del proceso quirúrgico con claridad,
          reduciendo la incertidumbre y aumentando tu tranquilidad.
        </p>

        {/* Beneficios */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Beneficio 1 */}
          <div
            style={{
              flex: "1 1 calc(33.33% - 20px)",
              maxWidth: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Actualizaciones en tiempo real</h3>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Recibe información precisa y actualizada sobre cada paso del procedimiento quirúrgico.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div
            style={{
              flex: "1 1 calc(33.33% - 20px)",
              maxWidth: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Fácil de usar</h3>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Solo necesitas un código único para acceder al estado del paciente.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div
            style={{
              flex: "1 1 calc(33.33% - 20px)",
              maxWidth: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Seguridad y privacidad</h3>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Todos los datos están protegidos con altos estándares de seguridad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
