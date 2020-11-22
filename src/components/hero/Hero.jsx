import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <div className="container">
                        <div className="text"><br /><br /><br />
                            <h3><span>Mengubah</span> Dunia Melalui <br />Inovasi Teknologi <br /> Find Radio  Memberikan Solusi <br /><span>Melalui</span> Radio </h3>
                            <a href="/favorite" className="btn fav">Favorite</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1>Apa Itu Find Radio  </h1>
                    <br /><br />
                    <h4> Find Radio  adalah platform digital yang bertujuan untuk memperkenalkan dan memudahkan masyarakat dalam mencari Saluran Radio yang ada di Indonesia,</h4>
                </div>
                <br /> <br />
                <h1>Layanan</h1>
            </div>
        )
    }
}
export default Hero;