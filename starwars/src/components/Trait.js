import React from 'react';
import ArrayOfTraits from './ArrayOfTraits';

const Trait = props => {
    return(
        <p>
            <strong>{props.trait.replace("_", " ").toUpperCase()}: </strong>
            {Array.isArray(props.traitValue) ? props.traitValue.map(value => {
                return <ArrayOfTraits value={value}/>}) : props.traitValue
            }
        </p>
    );
}

export default Trait;