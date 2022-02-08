import React from "react";
import "../../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div
        className="icon"
        onClick={() => window.open("https://www.linkedin.com/in/kaluzakamil/")}
      >
        <img src="/linkedin.png" alt="linkedin" />
      </div>
      <div
        className="icon"
        onClick={() => window.open("https://github.com/MietoProgramming")}
      >
        <img src="/github.png" alt="github" />
      </div>
      <div
        className="icon"
        onClick={() => window.open("mailto:kamil.kaluza25@gmail.com")}
      >
        <img src="/gmail.png" alt="gmail" />
      </div>
      {/* <h1>Contact</h1>
      <p>GitHub: https://github.com/MietoProgramming</p>
      <p>LinkedIn: https://www.linkedin.com/in/kaluzakamil/</p>
      <p>Email: kamil.kaluza25@gmail.com</p> */}
    </div>
  );
};

export default Contact;
