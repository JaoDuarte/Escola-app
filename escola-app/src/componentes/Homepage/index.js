import React from 'react';
import './style.css';
import Card from '../Card';
import Card2 from '../Card2';
import Card3 from '../Card3';


function Homepage(){
    return(
        <div className="home-page">
        <Card />
        <Card2 />
        <Card3 />

        </div>

    );
}
export default Homepage;