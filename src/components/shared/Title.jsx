import React from "react";

const Title = ({ text, className }) => (
  <h2 className={`title ${className}`}>{text ?? "Empty Title"}</h2>
);

export default Title;
