import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null) // Referencia para el menú
  const buttonRef = useRef(null) // Referencia para el botón

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/login'
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el clic no es en el menú ni en el botón, cierra el menú
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navItems = [
    { label: 'Inicio', path: '/', width: 'w-[40px]' },
    { label: 'Equipo médico', path: '/med-teams', width: 'w-[90px]' },
    { label: 'Paciente', path: '/patient', width: 'w-[50px]' },
    { label: 'Cirugía', path: '/surgery', width: 'w-[50px]' }
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center px-10 py-3 w-full bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full'>
      <div className='flex items-center gap-2'>
        <img src='/logosinfondo.png' alt='Logo' className='h-16' />
        <span className='text-lg font-bold'>OpTracker</span>
      </div>
      <div className='flex relative flex-1 shrink gap-8 items-center justify-center my-auto basis-0 min-w-[240px] max-md:max-w-full'>
        <div className='flex absolute right-4 z-0 gap-9 items-center text-sm font-medium min-h-[40px] min-w-[240px]'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`self-stretch my-auto whitespace-nowrap text-black hover:text-[#577C8E] ${item.width}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center my-auto w-[37px]'>
        <span
          ref={buttonRef}
          className='rounded-3xl w-[41px] h-[41px] overflow-hidden bg-transparent' // Cambiado a fondo transparente
          onClick={toggleMenu}
          aria-label='User profile'
        >
          <img
            loading="lazy"
            src="https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg"
            alt="John Doe profile picture"
            className="object-contain w-32 max-w-full aspect-square min-h-[128px] rounded-[64px] border-2 border-gray-300"
          />
        </span>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className='absolute right-0 mt-32 w-48 bg-white rounded-lg shadow-lg py-2 z-20'
          >
            <button
              className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
