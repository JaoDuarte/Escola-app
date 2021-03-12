import React from 'react';
import sla1 from './sla1.png';
import './style.css';

function Card(){
    return(
        <div className="card-container">

        <p>EXCEL BÁSICO</p>
        <p>21 dias a partir da data de inscriçãos</p>
        <img className="excel" src={sla1} alt=""/>
        
        </div>
    );
}
export default Card;
