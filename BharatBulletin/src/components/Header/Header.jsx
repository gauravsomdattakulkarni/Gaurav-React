import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
        <header className="shadow sticky-top z-50">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mr-3 h-12"
                            style={{ height: '60px' }}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-primary font-weight-bold" : ""}`
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-orange-700" : ""}`
                                    }
                                    to="/about_us"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-orange-700" : ""}`
                                    }
                                    to="/contact_us"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </header>
  );
}

export default Header