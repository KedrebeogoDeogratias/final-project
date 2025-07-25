import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg' // Ensure the path is correct


const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo" />
        <Nav />
    </header>
  )
}

export default Header