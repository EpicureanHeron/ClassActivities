import React from "react";


const Math = (props) => {
    let value

  
    switch(props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
           
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 *  props.num2;
            break;
        case "/":
             value = props.num1 / props.num2;
             break;
           
    }
    return <span>{value}</span>
  };

  
export default Math;