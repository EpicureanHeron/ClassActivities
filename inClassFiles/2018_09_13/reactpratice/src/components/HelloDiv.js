import React from "react";
const name = "Joe Thor"
const arrayOfThings = ["Sappho", "Boaz", "Poops"]

const HelloDiv = () => <div>
    <h1>My name is {name}</h1>
    <ul>
        <li>{arrayOfThings[0]}</li>
        <li>{arrayOfThings[1]}</li>
        <li>{arrayOfThings[2]}</li>
    </ul>
</div>

export default HelloDiv;