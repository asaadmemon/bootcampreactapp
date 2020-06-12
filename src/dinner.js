import React from 'react';

function Dinner(props) {
    return(
        <div>
            <h1>Welcome from A Memon</h1>
            <br/>
            <h1>Today we are serving dinner {props.dishName}</h1>
            <hr/>
            <h1>Today we are serving sweet {props.sweet}</h1>    
        </div>
    )
}

export default Dinner;