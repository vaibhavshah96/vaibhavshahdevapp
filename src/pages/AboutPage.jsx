import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        {" "}
        Born and raised in Hyderabad, a major hub for IT across the world, I
        have always been passionate about programming. I had my first
        introduction to programming when I was 10 years old. I have a Bachelor's
        degree in Computer Science from Sreenidhi Institue of Science and
        Technology, Hydrabad and a Master's degree in Computer Science from New
        Jersey Institute of Technology, Newark.
      </Content>
    </div>
  );
}

export default AboutPage;
