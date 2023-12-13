import React, { useContext } from "react";
import { MyContext } from "../../App";

const Button = () => {
  const button = useContext(MyContext);

  console.log(button.style);

  var divStyle = button.style;

  return <button style={divStyle}>{button.label}</button>;
};

export default Button;
