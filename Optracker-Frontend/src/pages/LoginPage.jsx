import apiClient from "@/services/xiosConfig";
import React, { useState } from "react";
// ... código existente ...
export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Alternar la visibilidad de la contraseña
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      const response = await apiClient.post("/auth/login", payload);
      
      const { token } = response.data;
      localStorage.setItem("authToken", token); // Guardar token en localStorage
      window.location.href = "/"; // Redirigir a la vista principal
    } catch (error) {
        if (error.response) {
            setError(error.response.data.message || "Credenciales incorrectas.");
        } else {
            setError("Error de red. Por favor, verifica tu conexión.");
        }
        console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 relative">
        <img src="/ruta/a/tu/imagen-de-fondo.jpg" alt="Fondo" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white ml-[-40px] hover:text-gray-900 dark:hover:text-white">
                <img className="w-20 h-20 mr-2" src="/logosinfondo.png" alt="logo" />
                OpTracker   
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Bienvenido a OpTracker
                    </h2>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Inicia sesión en tu cuenta
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electrónico</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@empresa.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    required 
                                />
                                <span 
                                    type="button" 
                                    onClick={togglePasswordVisibility} 
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 outline-none border-none"
                                    style={{ backgroundColor: 'transparent', border: 'none', cursor: "pointer" }} // Fondo transparente
                                >
                                    <span className="bg-gray-50 dark:bg-gray-700">👁️</span> 
                                </span>
                            </div>
                        </div>
                        <button type="button" className="w-full text-white focus:outline-none" style={{ backgroundColor: '#369EFF' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2a7bcf'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#369EFF'} onClick={handleSubmit}>Iniciar sesión</button>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">¿Olvidaste tu contraseña?</a>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}