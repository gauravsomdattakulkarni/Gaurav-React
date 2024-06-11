import React from 'react';
import '../../../src/App.css'
import {Link} from 'react-router-dom'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer 
                className="py-3 mt-auto" 
                style={{ 
                    backgroundColor: '#f8f9fa', 
                    width: '100%' 
                }}
            >
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about_us" className="nav-link px-2 text-muted">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact_us" className="nav-link px-2 text-muted">Contact Us</Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© {currentYear} Bharat Bulletin</p>
            </footer>
        </>
    );
}

export default Footer;