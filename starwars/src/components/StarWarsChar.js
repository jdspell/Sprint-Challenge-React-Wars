import React from 'react';
import Trait from './Trait';
import './StarWars.css';

const StarWarsChar = props => {
    console.log(props.character);
    console.log(Object.entries(props.character));
    return(
        <div className="character">
            {Object.entries(props.character).map((trait, index) => {
                return <Trait key={index} trait={trait[0]} traitValue={trait[1]}/>
            })}
        </div>
    );
}

export default StarWarsChar;