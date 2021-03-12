import React from 'react';
import ec from './ec.png';
import './style.css';

function Card2(){
    return(
        <div className="card-container">
        <p>ECONOMIA CIRCULAR</p>
        <p>21 dias a partir da data de inscriçãos</p>

        <img className="ec" src={ec} alt=""/>
        </div>
    );
}
export default Card2;
