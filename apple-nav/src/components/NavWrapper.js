import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


export default function NavWrapper() {
    return(
        <Wrapper>
            <Link to={'/'}>Home</Link>
            {data.map((element, i) => {
                return <Link to={`/sub/${element.id}`} key={i}>{element.name}</Link>
            })}
        </Wrapper>
    );
};