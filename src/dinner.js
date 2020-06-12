import React from 'react';

function Dinner(props) {
    return(
        <div>
            <h1>Today we are serving dinner {props.dishName}</h1>
            <h1>Today we are serving sweet {props.sweet}</h1>    
        </div>
    )
}

export default Dinner;