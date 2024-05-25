import React from 'react'

function Car(props)
{
    return(
        <>
            <p>Car Brand : {props.brand_name}</p>
            <p>Car Name : {props.car_name}</p>
            <p>Ex Showroom Price : {props.ex_showroom}</p>
            <hr/>
        </>
    );
}

export default Car