import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import LearnButton from "./LearnButton";
import sustainThrive from "./assets/sustainThrive.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="heroTitle">Sustainability Cell</div>
      <div className="heroSubtitle">IIT Bombay</div>
      <div className="heroDescription">
        Empowering sustainable practices and environmental consciousness through
        innovation, education, and action.
      </div>
      <LearnButton />
      <img
        src={sustainThrive}
        alt="Sustain Thrive"
        style={{ marginLeft: "5%" }}
      />
    </div>
  );
};

export default App;
