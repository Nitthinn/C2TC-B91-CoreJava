// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo">Order Management</Link>
                <button className="nav-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orderitems" className="nav-link">Order Items</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;




