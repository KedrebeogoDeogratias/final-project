import React from 'react'
import heroImage from '../assets/restauranfood.jpg';
const Hero = () => {
    return (
        <section className='hero'>
           <div className='hero-wrapper'>
             <div className='hero-text'>
                <h1 className='display-title'>Little Lemon</h1>
                <h2 className='section-title '>Chicago</h2>
                <p className='lead-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='btn'>Reserve a Table</button>
            </div>
            <div className='hero-image'>
                <img src={heroImage} alt='Hero' />
            </div>
           </div>
        </section>
    )
}

export default Hero