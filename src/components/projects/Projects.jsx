import React, { useState } from "react";
import "../../styles/Projects.scss";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="projectCard d-1">
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
      <div className="projectCard d-2">
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
      <div className="projectCard d-3">
        <h2>covidboard</h2>
        <div className="underline"></div>
        <p>Web app to fetching and showing data about covid-19.</p>
        <ul>
          <li>React</li>
          <li>COVID19 API</li>
          <li>Country flag API (countryflags.io)</li>
        </ul>
      </div>
      <div className="projectCard d-4">
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
