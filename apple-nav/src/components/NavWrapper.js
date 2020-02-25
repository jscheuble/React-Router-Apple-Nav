import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

export default function NavWrapper() {
    return(
        <div>
            {data.map(element => {
                return <Link key={element.name}>{element.name}</Link>
            })}
        </div>
    );
};