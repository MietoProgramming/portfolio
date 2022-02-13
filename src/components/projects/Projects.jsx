import React, { useState } from "react";
import "../../styles/Projects.scss";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "react-spring";
import data from "../../data/projectsData";

const Projects = () => {
  // const [open, set] = useState(true);

  const springApi = useSpringRef();
  const { move } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { y: -100 },
    to: {
      y: 0,
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(data, {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 0.5 },
  });

  useChain([springApi, transApi], [0, 0.5]);

  return (
    <div className="projectsContainer">
      {/* {transition((style, item) => {
        <animated.div className="projectCard" style={{ ...style }}>
          <h2>item.title</h2>
          <div className="underline"></div>
          <p>item.description</p>
          <ul>
            {item.techStack.map((tech) => {
              return <li>tech</li>;
            })}
          </ul>
        </animated.div>;
      })} */}
      <div className="projectCard">
        <h2>miniblog-react</h2>
        <div className="underline"></div>
        <p>
          Mini blog based on React, Redux, Sass and APIs
          (jsonplaceholder.typicode.com and randomuser.me).
        </p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>SASS</li>
          <li>APIs</li>
        </ul>
      </div>
      <div className="projectCard">
        <h2>cryptoexchange</h2>
        <div className="underline"></div>
        <p>
          Mini exchange platform. <br />
          Options: <br />
          <ul>
            <li>Calculate one currency value to another</li>
            <li>Check top 5 hottest cryptocurrencies</li>
            <li>Check details of top 10 cryptocurrencies like:</li>
            <ul>
              <li className="li-2">Price in USD</li>
              <li className="li-2">Price in CNY</li>
              <li className="li-2">Price in GBP</li>
              <li className="li-2">Price in EUR</li>
              <li className="li-2">Price in Bitcoins</li>
            </ul>
          </ul>
        </p>
        <ul>
          <li>Bootstrap 4</li>
          <li>React</li>
        </ul>
      </div>
      <div className="projectCard">
        <h2>covidboard</h2>
        <div className="underline"></div>
        <p>Web app to fetching and showing data about covid-19.</p>
        <ul>
          <li>React</li>
          <li>COVID19 API</li>
          <li>Country flag API (countryflags.io)</li>
        </ul>
      </div>
      <div className="projectCard">
        <h2>MojitoTube Platform</h2>
        <div className="underline"></div>
        <p>
          My first bigger app in my career. Platform to upload videos and
          photos. Options: <br />
          <ul>
            <li>Upload, delete and edit videos</li>
            <li>Upload, delete and edit pictures</li>
            <li>Views counter</li>
            <li>Search engine for videos and images</li>
            <li>Fit toasts, alerts and pop-up windows</li>
          </ul>
        </p>
        <ul>
          <li>C#</li>
          <li>ASP.NET</li>
          <li>Toastr (JS lib)</li>
          <li>Sweet alerts (JS lib)</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
