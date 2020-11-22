import React from 'react';
import './Footer.css';
const Footer = () => {
    return <footer id="footer">
        <div className="footer-logo">
        </div>
        <div>
            <h6>Find Radio</h6>
            <a className="nav-link" href="https://www.linkedin.com/in/rian-apriansyah-788aa0194/">Developer</a>
            <a className="nav-link" href="https://github.com/rynapriansah">Dokumentasi</a>
        </div>
        <div>
            <h6>Tautan</h6>
            <a className="nav-link" href="/">Beranda</a>
            <a className="nav-link" href="/about">Tentang Kami</a>
        </div>
    </footer>
}

export default Footer;