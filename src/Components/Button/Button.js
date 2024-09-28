import React from "react";

const Button = ({ size, type, txt }) => {
  return <button className={`btn-${type} btn-${size}`}>{txt}</button>;
};

export default Button;
