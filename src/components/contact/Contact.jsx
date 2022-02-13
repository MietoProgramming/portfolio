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
        <img src="./linkedin.png" alt="linkedin" />
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
        <img src="./github.png" alt="github" />
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
        <img src="./gmail.png" alt="gmail" />
      </div>
      {/* <h1>Contact</h1>
      <p>GitHub: https://github.com/MietoProgramming</p>
      <p>LinkedIn: https://www.linkedin.com/in/kaluzakamil/</p>
      <p>Email: kamil.kaluza25@gmail.com</p> */}
    </div>
  );
};

export default Contact;
