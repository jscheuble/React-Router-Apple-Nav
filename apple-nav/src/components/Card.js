import React from 'react';
import data from '../data';

export default function Card() {

    return(
        <nav>
            {data.map(elem => <span>{elem.sub}</span>)}
        </nav>
    );
}