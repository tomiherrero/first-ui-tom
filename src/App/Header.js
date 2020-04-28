import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
        <header>
                <nav>
                        <ul style = {{listStyle: 'none'}}>
                                <li>
                                        <Link to = "/">Home</Link>
                                </li>
                                <li>
                                        <Link to = "/country">Countries</Link>
                                </li>
                                <li>
                                        <Link to = "/cars">Cars</Link>
                                </li>
                                <li>
                                         <Link to = "/province">Province</Link>
                                </li>
                        </ul>
                </nav>
        </header>
);
export default Header;
