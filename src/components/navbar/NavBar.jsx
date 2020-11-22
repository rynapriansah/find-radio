import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar  navbar-expand-lg  bg-light navbar-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Find Radio </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sticky-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-nav">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-link" href="/">Beranda</a>
                            <a className="nav-link" href="/about">Tentang Kami</a>
                            <a className="nav-link" href="/favorite">Favorite</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;