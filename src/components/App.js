import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import About from "./about/About";
import Home from "./home/Home";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
