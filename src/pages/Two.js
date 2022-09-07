import React from "react";
import "../styles/Two.css";
import Logo from "../assets/images/logo.svg";
import fanday from "../assets/fanday.jpeg";
import { useNavigate } from "react-router-dom";


function Two() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/coming_soon/home/");
  }

  return (
    <div id="two" className="two">
      <div className="two__main">
        <div className="two__mainImg">
          <img src={Logo} alt="" />
        </div>
        <div className="two__mainText">
          <p>
            is your one-stop platform for all your NFT needs. We are building a platform that empowers and enables creators to build/grow their
            communities and engage with their fans.
          </p>
        </div>
        <div className="two_launchText">
          <p>
            Are you a creator wanting to change the way you engage with your fans?
          </p>
        </div>
        <button onClick={handleClick} className="button">Launch Fanday</button>
      </div>
    </div>
  );
}

export default Two;
