import React from "react";
import avatar from "../assets/avatar.jpg";

const AboutMe = () => (
  <section id="about">
    <h2>About Me</h2>
    <div className="about-me-content">
      <img src={avatar} alt="Michael Pierson" />
      <p>
        Hi, I'm Michael Pierson, a passionate and driven full stack developer. I
        recently completed the Full Stack Developer Bootcamp at UNC Chapel Hill,
        where I honed my skills in React, JavaScript, HTML, and CSS. As someone
        who is new to the field, I am dedicated to continuous learning and
        professional development.
      </p>
      <p>
        I am resilient and thrive in dynamic environments. My goal is to find a
        career where I can grow, learn, and contribute meaningfully. While I am
        open to contributing to open-source projects, I am also eager to tackle
        new challenges and collaborate with experienced developers.
      </p>
      <p>
        I believe that my dedication, adaptability, and passion for technology
        will allow me to make a positive impact in any team or organization.
        Let's build something amazing together!
      </p>
    </div>
  </section>
);

export default AboutMe;
