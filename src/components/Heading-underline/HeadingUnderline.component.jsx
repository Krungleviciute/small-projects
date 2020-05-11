import React from "react";
import "./headingUnderline.styles.css";

const HeadingUnderline = ({ title, headingStyle, lineStyle }) => {
  return (
    <div className="heading-with-underline">
      <p style={{ ...headingStyle }}>{title}</p>
      <hr style={{ ...lineStyle }} />
    </div>
  );
};

export default HeadingUnderline;
