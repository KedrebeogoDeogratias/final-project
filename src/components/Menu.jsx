import React from 'react'
import lemon from '../assets/lemon dessert.jpg';
import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import scooter from '../assets/scooter.png';


const Menu = () => {
    return (
        <section>
            <div className="wrapper-menu">
                <div className="menu-header">
                    <h2 className='section-title'>Specials</h2>
                    <button className='btn'>Online Menu</button>
                </div>
                <div className='menu-items'>
                    <div className='menu-item'>
                        <img src={salad} alt="Greek Salad" />
                        <div className="item-description">
                            <div className="title-item">
                                <h3 className='card-title'>Greek Salad</h3>    <span className='price'>$12.99</span>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>

                        <a className='' href='#'>Order a Delivery <icon> <img src={scooter} alt="" srcset="" /></icon></a>

                        </div>
                    </div>
                    <div className='menu-item'>
                        <img src={bruchetta} alt="Bruschetta" />
                        <h3>Bruschetta</h3> <span>$8.99</span>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>

                    </div>
                    <div className='menu-item'>
                        <img src={lemon} alt="Lemon Dessert" />
                        <h3>Limoncello Cake</h3> <span>$6.99</span>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu