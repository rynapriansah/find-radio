import React, { Component, Fragment } from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../Footer/Footer';
class About extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="container my-5">
                    <h1>  F.A.Q Seputar Find Radio</h1> <br />
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Apa Itu Find Radio ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body"> Find Radio adalah platform digital yang bertujuan untuk memperkenalkan dan memudahkan  masyarakat dalam mencari saluran radio di Indonesia
                           </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Apa Tujuan dari Find Radio  ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    Mendorong dan Membantu Mempromosikan Stasiun Radio agar lebih dikenal oleh masyrakat
                            </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Apa yang bisa Lakukan Find Radio ? </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    Find Radio memberikan Layanan Gratis Streaming untuk selalu  mendengarkan Radio, karena Melalaui Radio Kita bisa mendapatkan informasi-infomasi yang bermanfaat
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br /><br />
                <Footer />
            </Fragment>
        )
    }
}

export default About;