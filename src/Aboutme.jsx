import React from "react";
import "./App.css";
import Navigation from "./Navigation";

function Aboutme() {
  return (
    <div>
      <Navigation />
      <Hero title={props.title} subTitle={props.text} />
    </div>
  );
}

export default Aboutme;
