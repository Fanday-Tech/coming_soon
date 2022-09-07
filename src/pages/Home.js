import React from "react";
import Four from "./Four";
import One from "./One";
import Three from "./Three";
import Two from "./Two";
import BlobBG from "../components/sketch/sketch";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <BlobBG />
      <div className="home">
        <One />
        <Two />
        <Three />
        <Four />
      </div>
    </>
  );
}

export default Home;
