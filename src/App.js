import React, { Suspense, lazy } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const BlobBG = lazy(() => import("./components/sketch/sketch"));
const Home = lazy(() => import("./pages/Home"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

function App() {
  const url = window.location.pathname;
  const sanitizedUrlWithSlashes = url.replace(/(\/)\1*/g, "$1");
  let sanitizedUrl;

  if (sanitizedUrlWithSlashes.slice(-1) === "/" && url !== "/") {
    sanitizedUrl = sanitizedUrlWithSlashes.substring(0, sanitizedUrlWithSlashes?.lastIndexOf("/"));
  } else {
    sanitizedUrl = sanitizedUrlWithSlashes;
  }
  if (url !== sanitizedUrl) {
    window.location.pathname = sanitizedUrl;
    console.log(window.location.pathname);
  }
  console.log(url, sanitizedUrlWithSlashes, sanitizedUrl);
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="loading">
              <h1> Loading...</h1>
            </div>
          }
        >
          <div className="app">
            <Routes>
              <Route exact path="/coming_soon/home/" strict element={<ComingSoon />} />
              <Route exact path="/coming_soon/" strict element={<Home />} />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
