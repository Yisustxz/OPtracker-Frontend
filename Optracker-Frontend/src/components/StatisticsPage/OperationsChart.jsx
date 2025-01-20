// Importación necesaria
import {
    Chart as ChartJS,
    CategoryScale,    // Escala "category"
    LinearScale,      // Escala "linear" para el eje Y
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  import { Line } from 'react-chartjs-2';
  
  // Registrar los componentes
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  // Componente de gráfico
  export default function OperationsChart() {
    // Valores estáticos por ahora, estos deben ser reemplazados con los datos del endpoint
    const staticData = [5, 10, 15, 20, 25, 30, 20, 10, 5, 15, 25, 30]; // Placeholder
  
    const data = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      datasets: [
        {
          label: 'Cirugías Realizadas',
          data: staticData, // Aquí se usan los valores de `staticData`
          borderColor: 'rgb(99, 144, 173)',
          backgroundColor: 'rgba(105, 200, 238, 0.2)',
          fill: false,
          tension: 0.4, // Suaviza las líneas
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false, // Hace que el gráfico sea más flexible en tamaño
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: false,
          text: 'Operaciones Realizadas',
        
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Oculta la cuadrícula del eje X
          },
          ticks: {
            padding: 10, // Margen superior para los labels
            color: '#000', // Color de los labels del eje X
          },
          border: {
            display: false, // Oculta la línea horizontal del eje X
          },
        },
        y: {
          display: false, // Oculta el eje Y completamente (líneas y números)
        },
      },
    };
  
    return (
        <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "400px",
          margin: "0 auto",
          border: "1px solid #e5e7eb", // Borde gris claro
          borderRadius: "8px", // Bordes redondeados
          padding: "16px",
          paddingBottom: "5rem",
          backgroundColor: "white", // Fondo blanco para que destaque
        }}
      >
        {/* Encabezado personalizado */}
        <div style={{ textAlign: "left", marginBottom: "16px" }}>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
            Cirugías Realizadas
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "green",
              fontWeight: "500",
            }}
          >
            Último Año <span style={{ color: "green" }}>+20%</span>
          </p>
        </div>
        <Line data={data} options={options} />
      </div>
    );
  }
  