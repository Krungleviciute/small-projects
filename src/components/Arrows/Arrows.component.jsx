import React from "react";
import "./arrows.styles.css";

const Arrows = ({ arrowsContainer }) => {
  return (
    <div className="arrows-container" style={{ ...arrowsContainer }}>
      <img
        src={require("../../assets/images/arrow back.png")}
        alt="arrow-back"
        className="arrow-back"
      />
      <img
        src={require("../../assets/images/arrow.png")}
        alt="arrow-forward"
        className="arrow-forward"
      />
    </div>
  );
};

export default Arrows;
