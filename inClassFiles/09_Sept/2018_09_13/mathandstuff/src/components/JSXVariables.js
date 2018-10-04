import React from "react";
const name = "Joe"
const thoughts = "pretty neat so far"
const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {name.length} letters</h2>
        <h2>I think React is {thoughts}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
