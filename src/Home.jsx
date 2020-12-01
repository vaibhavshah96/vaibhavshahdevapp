import React from "react";
import "./App.css";
import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      <Navigation />

      <p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1>Hello!</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>This website is in the making.</h2>
        </div>
      </p>
    </div>
  );
}

export default Home;
