import React, { useState, useEffect } from "react";
import "./trendingSection.styles.css";

import Arrows from "../Arrows/Arrows.component";
import Card from "../Card/Card.component";
import Article from "../Article/Article.component";

const TrendingSection = () => {
  return (
    <div className="trending-container">
      <div className="trending-section">
        <div className="trending-container-header">
          <h2>trending</h2>
          <Arrows
            arrowsContainer={{ position: "relative", alignSelf: "flex-start" }}
          />
        </div>
        <div className="cards-section">
          <Card
            source={require("../../assets/images/trending-image-1.png")}
            cardBodyStyle={{ maxWidth: "280px" }}
          >
            <Article
              title="Dolore magna aliqua"
              text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
              timing="2m ago"
              headingStyle={{ color: "#202124", fontSize: "16px" }}
              paragraphStyle={{ color: "#A6ADB4", fontSize: "13px" }}
            />
          </Card>
          <Card
            source={require("../../assets/images/trending-image-2.png")}
            cardBodyStyle={{ maxWidth: "280px" }}
          >
            <Article
              title="Morbi eleifend a libero"
              text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
              timing="2m ago"
              headingStyle={{ color: "#202124", fontSize: "16px" }}
              paragraphStyle={{ color: "#A6ADB4", fontSize: "13px" }}
            />
          </Card>
          <Card
            source={require("../../assets/images/trending-image-3.png")}
            cardBodyStyle={{ maxWidth: "280px" }}
          >
            <Article
              title="Morbi eleifend a libero"
              text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat."
              timing="2m ago"
              headingStyle={{ color: "#202124", fontSize: "16px" }}
              paragraphStyle={{ color: "#A6ADB4", fontSize: "13px" }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
