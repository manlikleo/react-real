import React from 'react'

import '../css/style.min.css'; 
import logo from '../logo.svg'; 

export default function Navbar() {


    return (
        <nav className="home__navbar">
        <a href="/" className="home__logos"> 
            <div className="home__logcon">
                <img className="home__logo" src={logo} alt="relco-logo"/>
            </div>
            <span className="home__logoText">RELCO</span>
        </a>
        <div className="home__navitems">
            <a className="home__navitem" href='/'>
                <span>Agent Finder</span>
            </a>
            <a href='/' className="home__navitem">
                <span>Reach out</span>
            </a>
        </div>
    </nav>
    )
}
