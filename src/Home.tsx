import React from "react";
import { buildFooter } from "./components/Footer.tsx";
import Slideshow from "./components/slideshow.tsx";
import "./Home.css"
const Home = () => {
const footer = buildFooter();
  return (
    <div>
      <div className="homeBody">
        <img src="nextlife.png"/>
        <Slideshow/>
        <div className="elfsight-app-75812dd3-42e0-4241-9764-7863e47eddcd instagram" data-elfsight-app-lazy></div>
        {footer}
      </div>
    </div>  
  );
} 

export default Home;
