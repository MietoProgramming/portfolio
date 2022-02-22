import React, { useState, useRef } from "react";
import "../../styles/Experience.scss";

const Experience = () => {
  const [expArr, setExpArr] = useState(["card1", "card2", "card3", "card4"]);
  const mainContainer = useRef();

  const showCards = () => {
  }


  return (
    <div className="experienceContainer showCards" ref={mainContainer}>
      <div className="expCard card4">
        <h1>Internship 4</h1>
        <div className="underline"></div>
        <p id="expCardDesc">
          Company: ITSS Software <br />
          Time: 1 month <br />
          Description: I worked in the team with programmers and designer over
          many different mobile and web apps from areas like:
          <br />
          <br />
          <ul>
            <li>Medical</li>
            <li>Sport</li>
            <li>Git</li>
            <li>Arduino</li>
          </ul>
          <br />
          Technologies:
          <br />
          <br />
          <ul>
            <li>PHP</li>
            <li>YII framework</li>
            <li>Dart</li>
            <li>Flutter</li>
            <li>Javascript</li>
            <li>Bootstrap 4</li>
          </ul>
        </p>
      </div>

      <div className="expCard card3">
        <h1>Internship 3</h1>
        <div className="underline"></div>
        <p id="expCardDesc">
          Company: Dolby <br />
          Time: 1 month <br />
          Description: I was responsible for analysing attacks and creating reports based on my analyses.
          <br />
          Technologies:
          <br />
          <br />
          <ul>
            <li>Splunk</li>
            <li>FireEye</li>
          </ul>
        </p>
      </div>

      <div className="expCard card2">
        <h1>Internship 2</h1>
        <div className="underline"></div>
        <p id="expCardDesc">
          Company: Finsoft <br />
          Time: 1 month <br />
          Description: I worked over internal chat app.
          <br />
          Technologies:
          <br />
          <br />
          <ul>
            <li>C#</li>
            <li>.Net</li>
          </ul>
        </p>
      </div>

      <div className="expCard card1">
        <h1>Internship 1</h1>
        <div className="underline"></div>
        <p id="expCardDesc">
          Company: W-Support <br />
          Time: 1 month <br />
          Description: I did a lot of computer-related things like:
          <br />
          <br />
          <ul>
            <li>Creating 3D projects</li>
            <li>Programming websites</li>
            <li>Programming microcontrollers</li>
            <li>Working with a team using Git and Trello</li>
          </ul>
          <br />
          Technologies:
          <br />
          <br />
          <ul>
            <li>PHP</li>
            <li>C</li>
            <li>Git</li>
            <li>Arduino</li>
          </ul>
        </p>
      </div>

      <div className="expCardBox" onClick={showCards}>
        <img src="./expPocket.png" alt="pocket" />
      </div>
    </div>
  );
};

export default Experience;
