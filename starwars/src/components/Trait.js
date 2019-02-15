import React from 'react';

const Trait = props => {
    return(
        <p><strong>{props.trait.replace("_", " ").toUpperCase()}: </strong>{props.traitValue}</p>
    );
}

export default Trait;