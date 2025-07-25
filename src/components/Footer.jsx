import React from 'react'
import logo from '../assets/Logo.svg' // Ensure the path is correct
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <div>
        <h3>Little Lemon</h3>
        <p>123 Flavor Street</p>
        <p>New York, NY, USA</p>
        <p>Phone: +1 (212) 555-1234</p>
      </div>

      <div>
        <h4>Opening Hours</h4>
        <p>Monday - Saturday: 11 AM - 11 PM</p>
        <p>Sunday: 12 PM - 10 PM</p>
      </div>

      <div>
        <h4>Follow Us</h4>
        <p>
          <a href="#">Facebook</a> |
          <a href="#">Instagram</a> |
          <a href="#">Twitter</a>
        </p>
      </div>

      <p>&copy; 2025 Little Lemon. All rights reserved.</p>
    </footer>
  )
}

export default Footer