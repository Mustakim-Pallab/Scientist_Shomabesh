import React from 'react';
import './Header.css';
import logo from '../../images/Wiki_science_conference.svg.png';

const Header = () => {

    return (
        <header className='bg-light bg-gradient'>
            <div className="c-container">
                <nav className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={logo} alt="" />
                        <div className="container">
                            <h3 className='header-title mx-5'>1st International Science Conference</h3>
                            <p className='header-title mx-5'>Approximate Budget: 1500M USD</p>
                        </div>

                    </div>
                    
                </nav>
            </div>
        </header>
    );
};

export default Header;