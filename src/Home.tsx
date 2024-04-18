import React from "react";
import BuildFooter from "./components/Footer.tsx";
import { Link } from "react-router-dom";
import Slideshow from "./components/slideshow.tsx";
import "./Home.css"
const Home = () => {

  return (
    <div>
      <div className="homeBody">
        <img className="MainImg" src="./nextlife_cropped.png"/>
        <Slideshow/>
        <a className="instaHeader" href="https://www.instagram.com/nextlifetheatreco/">Check Out Our Instagram!</a>
        <div className="elfsight-app-75812dd3-42e0-4241-9764-7863e47eddcd instagram" data-elfsight-app-lazy></div>
        <Link onClick={() => window.scrollTo(0, 0)} className="supportLink" to="/support">Help Support Us!</Link>
        <BuildFooter/>
      </div>
    </div>  
  );
} 

export default Home;
