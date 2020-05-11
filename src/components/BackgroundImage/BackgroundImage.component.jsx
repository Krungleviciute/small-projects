import React from "react";
import "./backgroundImage.styles.css";

const BackgroundImage = ({ children, imageStyle, url }) => {
  return (
    <div
      className="background-image-card"
      style={{
        ...imageStyle,
        backgroundImage: `url(${url})`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
