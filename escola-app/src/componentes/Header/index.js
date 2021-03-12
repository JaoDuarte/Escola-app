import React from 'react';
import logo from './senai-logo.png';
import './style.css';

function Header(){
    return(
        <header>
            
            <img src={logo} alt="logo"/>
            
           <p className="txtheader"> Escola SENAI Suíço-Brasileira "Paulo Ernesto Tolle"</p>
        </header>
    );
}
export default Header;