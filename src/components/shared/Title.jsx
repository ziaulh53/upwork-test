import React from "react";
import classNames from "classnames";

const Title = ({
  color = "#1F295A",
  fontSize = "1.5",
  fontWeight = "normal",
  textTransform,
  text,
  center = false,
}) => {
  const style = {
    fontSize: `${fontSize}rem`,
    fontWeight,
    color,
    textTransform,
  };
  return (
    <h2
      className={classNames("title", { "text-center": center })}
      style={style}
    >
      {text ?? "Empty Title"}
    </h2>
  );
};

export default Title;
