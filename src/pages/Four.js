import React from "react";
import Footer from "../components/Footer";
import "../styles/Four.css";

import adguard from "../assets/images/adguard.svg";
import astra from "../assets/images/astra.svg";
import certificate from "../assets/images/certificate.svg";
import cube from "../assets/images/cube.svg";
import plant from "../assets/images/plant.svg";

function Four() {
  return (
    <div className="four" id="four">
      <div className="four__left">
        <div className="four__leftText">
          <h1>NFTs</h1>
        </div>
        <div className="four__leftText">
          <h3># 01</h3>
          <h4>THE WHAT</h4>
          <p>An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency.</p>
          <p>NFTs are also generally one of a kind, or at least one of a very limited run, and have unique identifying codes</p>
          <p><b>~Forbes Advisor</b></p>
        </div>
        <div className="four__leftText">
          <h3># 02</h3>
          <h4>THE WHY</h4>
          <p>NFTs are a new concept in the cryptocurrency space. They can represent real world assets and are secured by blockchain technology. They reduce risk of fraud and create an immutable record of ownership that didn’t exist before.</p>
        </div>
      </div>
      <div className="four__right">
        {/* <div className="four__rightText">
          <h3>THE BENEFITS </h3>
        </div> */}
        {/* <div className="four__rightNonText"> */}
          <div className="four__rightText">
            <h3># 03</h3>
            <h4>THE BENEFITS </h4>
          </div>
          <div className="empty">
          </div>
          <div className="four__rightContainer">
            <img src={plant} alt="" />
            <h2>Huge Growth Potential</h2>
          </div>
          <div className="four__rightContainer">
            <img src={cube} alt="" />
            <h2>Can Represent Tangible Assets</h2>
          </div>
          <div className="four__rightContainer">
            <img src={astra} alt="" />
            <h2>Secured By The blockchain</h2>
          </div>
          <div className="four__rightContainer">
            <img src={adguard} alt="" />
            <h2>Reduced Risk of Fraud</h2>
          </div>
          <div className="four__rightContainer">
            <img src={certificate} alt="" />
            <h2>Digital Ownership</h2>
          </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Four;
