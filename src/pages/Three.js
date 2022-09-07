import React from "react";
import "../styles/Three.css";
import gasfee from "../assets/images/gasfee.svg";
import categories from "../assets/images/categories.svg";
import rewards from "../assets/images/rewards.svg";
import security from "../assets/images/security.svg";

function Three() {
  return (
    <div className="three" id="three">
      <div className="three__left">
        <h1>Our </h1>
        <h1>Platform</h1>
      </div>
      <div className="three__right">
        <div className="three__rightContainer">
          <img src={security} alt="" />
          <h1>Non-custodial</h1>
          <p>Store your NFTs in Non-Custodial wallets like metamask and have full control over it</p>
        </div>
        <div className="three__rightContainer">
          <img src={gasfee} alt="" />
          <h1>Low gas fees</h1>
          <p>No more worrying about high gas fees as we have made it as low as few cents</p>
        </div>
        <div className="three__rightContainer">
          <img src={rewards} alt="" />
          <h1>Exclusive rewards</h1>
          <p>Get the cahnce of winning exciting and exclusive rewards on the purchace of your favourite NFTs</p>
        </div>
        <div className="three__rightContainer">
          <img src={categories} alt="" />
          <h1>Diverse categories</h1>
          <p>Buy NFTs from diverse categories and ranges starting from standard to premium</p>
        </div>
      </div>
    </div>
  );
}

export default Three;
