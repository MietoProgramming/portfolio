import React from "react";
import "../../styles/Home.scss";

const Home = () => {
  return (
    <div>
      <div className="card">
        <div className="cardImgBoxVer">
          <img src="/pic1.png" alt="" />
        </div>
        <div className="descriptionBox">
          <p>
            Programmer with passion not only to computers and new
            technologies....
          </p>
        </div>
      </div>
      {/* <div className="card">
        <div className="cardImgBoxHor">
          <img src="/pic2.png" alt="" />
        </div>
        <div className="descriptionBox">
          <p>Ready for new challanges...</p>
        </div>
      </div> */}
      {/* <div className="card">
        <div className="cardImgBox">
          <img src="/pic3.png" alt="" />
        </div>
        <div className="descriptionBox">
          <p>Always aiming high...</p>
        </div>
      </div>
      <div className="card">
        <div className="cardImgBox">
          <img src="/pic4.png" alt="" />
        </div>
        <div className="descriptionBox">
          <p>Focused on hard work....</p>
        </div>
      </div>
      <div className="card">
        <div className="cardImgBox">
          <img src="/pic5.png" alt="" />
        </div>
        <div className="descriptionBox">
          <p>To become the best version of himself.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
