import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import Hero from '../hero/Hero';
import './Beranda.css';
import Fitur from '../fitur/Fitur';
import Footer from '../Footer/Footer';

class Beranda extends Component {
    render () {
        return (
            <div>
                <NavBar/>
                <Hero />
                <Fitur/>
                <Footer/>
            </div>
        )
    }
}

export default Beranda;