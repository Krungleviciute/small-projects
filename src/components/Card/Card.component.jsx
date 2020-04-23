import React from "react";
import "./card.styles.css";

const Card = ({ source, children, cardStyle, imageStyle, cardBodyStyle }) => {
  return (
    <div className="card" style={{ ...cardStyle }}>
      <div className="card-image" style={{ ...imageStyle }}>
        <img src={source} alt="" />
      </div>
      <div className="card-body" style={{ ...cardBodyStyle }}>
        {children}
      </div>
    </div>
  );
};

export default Card;
