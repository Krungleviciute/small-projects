import React from "react";
import "./article.styles.css";

const Article = ({
  title,
  text,
  articleStyle,
  headingStyle,
  paragraphStyle,
  timing,
}) => {
  return (
    <div className="article-section" style={{ ...articleStyle }}>
      <p className="article-heading" style={{ ...headingStyle }}>
        {title}
      </p>
      <p className="article-paragraph" style={{ ...paragraphStyle }}>
        {text}
      </p>
      {timing && (
        <div className="timing-line">
          <img src={require("../../assets/images/Path 5.png")} alt="clock" />
          <p>{timing} </p>
        </div>
      )}
    </div>
  );
};

export default Article;
