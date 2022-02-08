import React from "react";
import "../../styles/About.scss";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="icon">
        <img src="/passions.png" alt="passion" />
      </div>
      <div className="icon">
        <img src="/education.png" alt="education" />
      </div>
      <div className="icon">
        <img src="/work.png" alt="work" />
      </div>
      {/* <h1>Contact</h1>
      <p>GitHub: https://github.com/MietoProgramming</p>
      <p>LinkedIn: https://www.linkedin.com/in/kaluzakamil/</p>
      <p>Email: kamil.kaluza25@gmail.com</p> */}
    </div>
  );
};

export default About;
