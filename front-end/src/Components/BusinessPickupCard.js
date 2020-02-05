import React from 'react';
import styled from 'styled-components';


const Pickup = styled.a`
background: red;
color: black;
width: 29%;
margin: 10px;
`

export default function BusinessPickupCard(props) {

    function addToList() {

    }
    // console.log(props.data)
    return(
        <Pickup href="" onClick={addToList}>
            <h4>Address:</h4>
            <p>Type: {props.pickup.food_type}</p>
            <p>Quantity: {props.pickup.quantity}</p>
            <p>Preferred pickup time: {props.pickup.pickup_time}</p>
             <p>Volunteer: {props.pickup.Volunteer}</p> 
        </Pickup>
    )
    }  