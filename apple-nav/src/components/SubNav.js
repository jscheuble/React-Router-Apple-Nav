import React from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';



export default function SubNav() {
    const params = useParams();
    const helper = data.filter(elem => elem.id == params.id);
    console.log(helper);

    return(
        <div>
            {helper[0].sub.map((elem, i) => <div key={i}>{elem}</div>)}

        </div>
    );
};