import React from "react";
import "./heroSection.styles.css";
import HeadingUnderline from "../Heading-underline/HeadingUnderline.component";
import Article from "../Article/Article.component";
import Arrows from "../Arrows/Arrows.component";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-picture">
        <div className="hero-section-article">
          <HeadingUnderline title="World news" />
          <Article
            articleStyle={{ marginTop: "15px" }}
            title="Amazing places in America to visit."
            text="For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in."
          />
          <p className="btn btn-danger">Learn More</p>
        </div>
      </div>
      <div className="hero-more-news">
        <div className="more-news-section">
          <HeadingUnderline
            title="more news"
            headingStyle={{ color: "#202124" }}
            lineStyle={{ borderColor: "#EBEDED" }}
          />
          <Arrows />

          <div className="more-articles">
            <div>
              <p className="section-title">travel</p>
              <Article
                headingStyle={{ color: "#202124", fontSize: "16px" }}
                paragraphStyle={{ color: "#A6ADB4" }}
                title="Article title"
                text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…"
                timing="2 min ago"
              />
            </div>
            <div>
              <p className="section-title">technology</p>
              <Article
                headingStyle={{ color: "#202124", fontSize: "16px" }}
                paragraphStyle={{ color: "#A6ADB4" }}
                title="Article title"
                text="Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…"
                timing="2 min ago"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
