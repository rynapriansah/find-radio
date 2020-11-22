import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Beranda from '../../components/beranda/Beranda';
import About from '../../components/about/About';
import Favorite from '../../components/favorite/Favorite';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={Beranda} />
                    <Route path="/about" component={About} />
                    <Route path="/favorite" component={Favorite} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Router;