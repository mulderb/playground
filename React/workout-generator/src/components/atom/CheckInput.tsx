import * as React from "react";

interface CheckInputProps {
  label: string;
  //   labelPosition: string;
}

const CheckInput: React.FC<CheckInputProps> = ({ label }) => (
  <div className="checkbox ">
    <input type="checkbox"></input>
    <label>{label}</label>
  </div>
);

export default CheckInput;
