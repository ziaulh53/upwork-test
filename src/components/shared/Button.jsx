import React from "react";
import { Button } from "react-bootstrap";

const SharedBtn = ({ className, text }) => (
  <Button className={`shared-btn ${className}`}>{text ?? "Empty"}</Button>
);

export default SharedBtn;
