import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faFacebook, faSquareSnapchat, faSquareInstagram, faLinkedin, faFlickr } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='container'>
                <div>
                    <NavLink to='https://www.facebook.com/'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </NavLink>

                    <NavLink to='https://www.instagram.com/'>
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </NavLink>

                    <NavLink to='https://www.snapchat.com/'>
                        <FontAwesomeIcon icon={faSquareSnapchat} />
                    </NavLink>

                    <FontAwesomeIcon icon={faFlickr} />
                    <FontAwesomeIcon icon={faSquareTwitter} /> {/* Use the imported icon */}
                    <NavLink to='https://www.linkedin.com/in/mohd-shamsher-bb216a20a/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </NavLink>

                </div>

                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </>
    );
}

export default Navbar;
