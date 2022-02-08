import React from "react";
import "../../styles/About.scss";

const About = () => {
  return (
    <div className="aboutContainer">
      {/* <div className="icon">
        <img src="/passions.png" alt="passion" />
      </div>
      <div className="icon">
        <img src="/education.png" alt="education" />
      </div>
      <div className="icon">
        <img src="/work.png" alt="work" />
      </div> */}
      <div className="preview">
        <div className="iconBubble">
          <img src="/passions.png" alt="passion" />
        </div>
        <div className="descBubble">
          <h1 id="bubbleTitle">Education</h1>
          <div className="underline"></div>
          <p id="bubbleText">
            My text about my education, university and those things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
