import React from "react";
import "../styles/One.css";

function One() {
  return (
    <div className="one" id="one">
      <div className="one__text">
        <h1>
          Empowering <span>creators</span> with the power of web3
        </h1>
      </div>
      <div className="one__button">
        <a href="#two">↓</a>
      </div>
    </div>
  );
}

export default One;
