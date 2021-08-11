import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Prathibha R</span>,<br /> 
          an undergraduate student passionate about Full Stack Development and Data Analytics. 
          I consider myself a ‘forever student’, when it comes to learning new technologies and building applications.
          Besides coding, you can find me cooking and reading.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;