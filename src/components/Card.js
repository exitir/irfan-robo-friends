import React from 'react';
import './Card.css'

const Card = (props) => {
    // const { name, email, id } = props;
    // or in side parameters it can be done directly e.g. const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${Math.floor(Math.random() * 20) + 1}`}></img>
            <div>
                <h2> {props.name}</h2>
                <h3>{props.id}</h3>
                <h3>{props.username}</h3>
                <h3>{props.email}</h3>
            </div>
        </div>
    );
}

export default Card;