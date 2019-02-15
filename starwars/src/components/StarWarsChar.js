import React from 'react';
import Trait from './Trait';

const StarWarsChar = props => {
    console.log(props.character);
    return(
        <div className="character">
            {Object.values(props.character).map(trait => {
                return <Trait trait={trait}/>
            })}
        </div>
    );
}

export default StarWarsChar;