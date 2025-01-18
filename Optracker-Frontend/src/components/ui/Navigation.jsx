import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/login'
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const navItems = [
    { label: 'Inicio', path: '/', width: 'w-[40px]' },
    { label: 'Equipo médico', path: '/medteams', width: 'w-[90px]' },
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
      <div className='relative'>
        <button
          className='rounded-3xl w-[41px] h-[41px] overflow-hidden'
          onClick={toggleMenu}
          aria-label='User profile'
        >
          <img
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/9ce98b8d152b957dce5797de30055cf980a701c9485fd96eaf3e963f03b1df12?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e'
            alt='User profile'
            className='object-cover w-full h-full'
          />
        </button>
        {isMenuOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20'>
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
