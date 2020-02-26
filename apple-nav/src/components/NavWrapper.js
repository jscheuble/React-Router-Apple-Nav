import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';


export default function NavWrapper() {
    return(
        <div>
            {data.map((element, i) => {
                return <Link to={`/sub/${element.id}`} key={i}>{element.name}</Link>
            })}
        </div>
    );
};