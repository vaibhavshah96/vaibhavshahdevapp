import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        {" "}
        <p>
          Born and raised in Hyderabad, a major hub for IT across the world, I
          have always been passionate about programming. I had my first
          introduction to programming when I was 10 years old. I have a
          Bachelor's degree in Computer Science from Sreenidhi Institue of
          Science and Technology, Hydrabad and a Master's degree in Computer
          Science from New Jersey Institute of Technology, Newark.
        </p>
        <br />I have experience with Java, C, Python, Spring, Spring Boot,
        Angular, and React.
        <p>
          <br />I have also worked with several other technologies which
          include:{" "}
          <ul>
            <li>Storage: SQL, MongoDB, MySQL, PostgreSQL</li>
            <li>Cloud: AWS, GCP</li>
            <li>Web: Jakarta EE, RESTful, Tomcat, nginx, WebSphere</li>
            <li>Building Tools: Maven, Gradle</li>
            <li>Version Control: Git, GitHub, Svn</li>
            <li>IDE: Eclipse, STS, VS Code, xTerm</li>
            <li>Testing: jUnit, Mokito</li>
            <li>
              Other Softwares, including Photoshop, MS Office, GSuite, Postman,
              etc.
            </li>
          </ul>
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
