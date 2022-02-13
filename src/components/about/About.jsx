import React, { useState } from "react";
import "../../styles/About.scss";

const About = () => {
  const [dialogOneShow, setDialogOneShow] = useState(false);
  const [dialogTwoShow, setDialogTwoShow] = useState(false);
  const [dialogThreeShow, setDialogThreeShow] = useState(false);

  const [showIcons, setShowIcons] = useState(true);

  const handleUnclick = () => {
    [
      [dialogOneShow, setDialogOneShow],
      [dialogTwoShow, setDialogTwoShow],
      [dialogThreeShow, setDialogThreeShow],
    ].forEach((dialogPair) => {
      const [value, action] = dialogPair;
      if (value === true) {
        action(!value);
        setShowIcons(true);
      }
    });
  };

  return (
    <div className="aboutContainer" onClick={() => handleUnclick()}>
      <div
        className={showIcons ? "icon" : "icon inactive"}
        onClick={() => {
          setDialogOneShow(!dialogOneShow);
          setShowIcons(false);
        }}
      >
        <img src="./passions.png" alt="passion" />
      </div>
      <div
        className={showIcons ? "icon" : "icon inactive"}
        onClick={() => {
          setDialogTwoShow(!dialogTwoShow);
          setShowIcons(false);
        }}
      >
        <img src="./education.png" alt="education" />
      </div>
      <div
        className={showIcons ? "icon" : "icon inactive"}
        onClick={() => {
          setDialogThreeShow(!dialogThreeShow);
          setShowIcons(false);
        }}
      >
        <img src="./work.png" alt="work" />
      </div>

      <div className={dialogOneShow ? "preview active" : "preview"}>
        <div className="iconBubble">
          <img src="./passions.png" alt="passion" />
        </div>
        <div className="descBubble">
          <h1 id="bubbleTitle">Passion</h1>
          <div className="underline"></div>
          <p id="bubbleText">
            My passions are Street Lifting and problem solving in any version. I
            like to try many different things. That's why I study a lot, read
            and act. I can't imagine my life without compete with others,
            especially with better than me. I have some achivements in Street
            Lifting like: <br /> <br />
            Medalist on Street Lifting Poland Championships 2021 <br />
            Chin-Up Poland Champion cat.+85kg 2021
          </p>
        </div>
      </div>

      <div className={dialogTwoShow ? "preview active" : "preview"}>
        <div className="iconBubble">
          <img src="./education.png" alt="edication" />
        </div>
        <div className="descBubble">
          <h1 id="bubbleTitle">Education</h1>
          <div className="underline"></div>
          <p id="bubbleText">
            I spend a lot of time learning new things and study from books and
            articles. I give my best to become batter at least in one thing
            every single day. <br />
            How does it look...?
            <br />
            Let's see my GitHub Profile 😄
          </p>
        </div>
      </div>

      <div className={dialogThreeShow ? "preview active" : "preview"}>
        <div className="iconBubble">
          <img src="./work.png" alt="work" />
        </div>
        <div className="descBubble">
          <h1 id="bubbleTitle">Work</h1>
          <div className="underline"></div>
          <p id="bubbleText">
            Currently I try to become a React Developer. I got some experience
            on 4 internships: <br /> <br />
            🥟🥟🥟 in Poland and...
            <br />
            🍕 1 in Italy
            <br />
            One food - One internship 😅
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
