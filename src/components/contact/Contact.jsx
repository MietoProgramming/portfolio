import React, { useState } from "react";
import "../../styles/Contact.scss";

const Contact = () => {
  const [dialogOneShow, setDialogOneShow] = useState("dialogBox");
  const [dialogTwoShow, setDialogTwoShow] = useState("dialogBox");
  const [dialogThreeShow, setDialogThreeShow] = useState("dialogBox");

  return (
    <div className="contactContainer">
      <div className={dialogOneShow}>
        <p>Kamil Kałuża</p>
      </div>
      <div
        className="icon"
        onClick={() => window.open("https://www.linkedin.com/in/kaluzakamil/")}
        onMouseLeave={() => setDialogOneShow("dialogBox")}
        onMouseEnter={() => setDialogOneShow("dialogBox active")}
      >
        <img src="./portfolio/linkedin.png" alt="linkedin" />
      </div>
      <div className={dialogTwoShow}>
        <p>MietoProgramming</p>
      </div>
      <div
        className="icon"
        onClick={() => window.open("https://github.com/MietoProgramming")}
        onMouseLeave={() => setDialogTwoShow("dialogBox")}
        onMouseEnter={() => setDialogTwoShow("dialogBox active")}
      >
        <img src="./portfolio/github.png" alt="github" />
      </div>
      <div className={dialogThreeShow}>
        <p>kamil.kaluza25@gmail.com</p>
      </div>
      <div
        className="icon"
        onClick={() => window.open("mailto:kamil.kaluza25@gmail.com")}
        onMouseLeave={() => setDialogThreeShow("dialogBox")}
        onMouseEnter={() => setDialogThreeShow("dialogBox active")}
      >
        <img src="./portfolio/gmail.png" alt="gmail" />
      </div>
    </div>
  );
};

export default Contact;
