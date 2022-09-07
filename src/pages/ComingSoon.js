import React from "react";
import "../styles/ComingSoon.css";
import Soon from "../assets/images/ComingSoon.png";

function ComingSoon() {
  return (
    <div className="soon">
      <div className="soon__content">
        <div className="soon__contentTop">
          <p>Coming Soon</p>
          <h1>We will make it worth the wait.</h1>
        </div>
        <div className="soon__contentBottom">
          <span>Meanwhile, if you're interested in the project</span>
          <button>Contact us!</button>
        </div>
      </div>
      <p>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/nature-scene-rural-land-agriculture-grassland-abtract-silhouette-asian-farmers-working-rice-field-illustration_12953546.htm#query=illustrations&position=10&from_view=keyword%22%3EImage">
          jcomp
        </a>{" "}
        on Freepik
      </p>
    </div>
  );
}

export default ComingSoon;
