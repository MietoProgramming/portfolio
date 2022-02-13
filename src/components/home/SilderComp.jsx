import React from "react";
import Slider from "react-slick";
import "../../styles/Home.scss";

const SilderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="card">
            <div className="cardImgBoxVer">
              <img src="./portfolio/pic1.png" alt="" />
            </div>
            <div className="descriptionBox">
              <p>
                Programmer with passion not only to computers and new
                technologies....
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="cardImgBoxHor">
              <img src="./portfolio/pic2.png" alt="" />
            </div>
            <div className="descriptionBox">
              <p>Ready for new challanges...</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="cardImgBoxVer">
              <img src="./portfolio/pic3.png" alt="" />
            </div>
            <div className="descriptionBox">
              <p>Always aiming high...</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="cardImgBoxHor">
              <img src="./portfolio/pic4.png" alt="" />
            </div>
            <div className="descriptionBox">
              <p>Focused on hard work....</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="cardImgBoxVer">
              <img src="./portfolio/pic5.png" alt="" />
            </div>
            <div className="descriptionBox">
              <p>To become the best version of himself.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SilderComp;
