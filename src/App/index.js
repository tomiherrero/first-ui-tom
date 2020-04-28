import React, {Fragment} from 'react'; 
import Header from './Header';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './home';
import Country from "../pages/Country";
import Cars from "../pages/Cars";
import Provinces from "../pages/Province";


const Index =() => (
        <Fragment>
                <Router>
                        <Header/>
                        <main>
                                < Switch>
                                        <Route path= "/country" component={Country}/>
                                        <Route path = "/cars" component = {Cars}/>
                                        <Route path = "/province" component = {Provinces}/>
                                        <Route path = "/" component = {Home}/>
                                </Switch>                              
                        </main>
                        <Footer />
                </Router>
        </Fragment>
);

export default Index;