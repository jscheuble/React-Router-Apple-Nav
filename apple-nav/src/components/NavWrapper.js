import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import SubNav from './SubNav';

export default function NavWrapper() {
    return(
        <div>
            {data.map((element, i) => {
                return <Link to={'/'} key={i}>{element.name}</Link>
            })}
            <SubNav />
        </div>
    );
};