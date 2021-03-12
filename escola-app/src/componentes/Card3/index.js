import React from 'react';
import ea from './ea.jpg';
import './style.css';

function Card3(){
    return(
        <div className="card-container">
        <p>COMPETÊNCIA TRANSVERSAL - EDUCAÇÃO AMBIENTAL</p>
        <p>21 dias a partir da data de inscriçãos</p>
        
        <img className="ea" src={ea} alt=""/>
        </div>
    );
}
export default Card3;
