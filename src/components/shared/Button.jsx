import React from "react";
import { Button } from "react-bootstrap";

const SharedBtn = ({ style, text }) => (
  <Button className="shared-btn" style={style}>
    {text ?? "Empty"}
  </Button>
);

export default SharedBtn;
