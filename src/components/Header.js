import React from 'react';
import bannerImg from '../images/restaurantfood.jpg';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* banner texts */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served 
                    with a modern twist.</p>
                    <BrowserRouter>
                     <Link to="/booking"><button aria-label='On Click'>Reserve a table</button></Link>
                    </BrowserRouter> 
                </div>

                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};

export default Header;