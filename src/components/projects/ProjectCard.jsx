import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { clearTimeout } from "timers";

const ProjectCard = ({ duration }) => {
  const cardRef = useRef();

  useEffect(() => {
    const action = setTimeout(() => {
      cardRef.current.style = "projectCard";
    }, 4000);
    return () => clearTimeout(action);
  }, []);

  const animation = {
    scale: [0, 1],
    position: ["absolute", "static"],
  };

  return (
    <motion.div
      ref={cardRef}
      //   className="projectCard"
      initial={{ height: 100, width: 100 }}
      animation={animation}
      transition={duration}
    >
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
    </motion.div>
  );
};

export default ProjectCard;
