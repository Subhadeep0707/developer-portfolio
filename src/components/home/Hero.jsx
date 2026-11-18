import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <h1>SUBHADEEP ROY</h1>
      <h2>Frontend Developer | Aspiring Java QA Automation </h2>
      <p>
        I'm a Computer Science and Engineering graduate from Mallabhum Institute
        of Technology with a strong interest in frontend development and
        software quality. I enjoy building web applications using React and
        JavaScript, focusing on component-based architecture, state management,
        responsive interfaces and practical problem-solving. Alongside
        development, I've been strengthening my programming fundamentals through
        Core Java, OOP, SQL and Data Structures. I'm also exploring software
        testing and automation using Selenium to understand how applications can
        be validated for reliability and functionality. I believe in continuous
        learning, writing maintainable code and improving through hands-on
        projects.
      </p>
      <Link to="/projects">View Projects</Link>
      <Link to="/contact">Contact Me</Link>





    </>
  );
};

export default Hero;
