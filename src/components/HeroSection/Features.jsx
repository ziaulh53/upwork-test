import React from "react";
const Features = () => {
  const features = [
    "7 day free trial",
    "Easy setup",
    "24/7 support",
    "Cancel anytime",
  ];
  return (
    <ul className="hero-features">
      {features.map((feature, idx) => (
        <li key={idx}>
          <img src="/img/correct.png" alt="" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default Features;
