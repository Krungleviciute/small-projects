import React from "react";
import "./happeningNowSection.styles.css";
import BackgroundImage from "../BackgroundImage/BackgroundImage.component";
import sanFrancisco from "../../assets/images/SanFrancisco.png";
import road from "../../assets/images/road.png";
import forestPath from "../../assets/images/ForestPath.png";
import elephant from "../../assets/images/Elephant.png";
import parrot from "../../assets/images/parrot.png";
import Arrows from "../Arrows/Arrows.component";
import Article from "../Article/Article.component";

const HappeningNowSection = () => {
  return (
    <div className="happening-now-container">
      <div className="happening-now-section">
        <div className="happening-now-container-header">
          <h2>happening now</h2>
          <Arrows
            arrowsContainer={{ position: "relative", alignSelf: "flex-start" }}
          />
        </div>
        <div className="happening-now-layout">
          <div className="column-1">
            <BackgroundImage url={sanFrancisco}>
              <div className="article-container">
                <h3>City</h3>
                <Article
                  title="Large article title"
                  text="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
                  timing="2m ago"
                />
              </div>
            </BackgroundImage>
            <BackgroundImage url={forestPath}>
              <div className="article-container">
                <h3>travel</h3>
                <Article
                  title="Large article title"
                  text="Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam."
                  timing="2m ago"
                />
              </div>
            </BackgroundImage>
          </div>
          <div className="column-2">
            <div className="column-2-item">
              <img
                className="column-2-item-image"
                src={elephant}
                alt="elephant"
              />
              <Article
                title="Small title"
                headingStyle={{ fontSize: "16px", color: "#000" }}
                timing="3h ago by Worldnews"
              />
            </div>
            <div className="column-2-item">
              <img
                className="column-2-item-image"
                src={parrot}
                alt="elephant"
              />
              <Article
                title="Small title"
                headingStyle={{ fontSize: "16px", color: "#000" }}
                timing="4h ago by Days"
              />
            </div>
            <div className="column-2-item">
              <img className="column-2-item-image" src={road} alt="elephant" />
              <Article
                title="Small title"
                headingStyle={{ fontSize: "16px", color: "#000" }}
                timing="3h ago by Monica"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappeningNowSection;
