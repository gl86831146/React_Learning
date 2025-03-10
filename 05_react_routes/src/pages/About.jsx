import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const age = params.get("age");
  return (
    <div>
      <h1>About Page</h1>
      <h2>name:{name}</h2>
      <h2>age:{age}</h2>
    </div>
  );
};

export default About;
