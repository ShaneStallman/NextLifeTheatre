
import React, { useState } from "react";
import {pageNavigation} from "./types";
import { buildFooter } from "./components/Footer.tsx";
import "./App.css"
import "./Home.css"
const Home = () => {
const footer = buildFooter();
  return (
    <div>
        <div className="mainBody" id="home">
            <div className="mainImg">
              <img src="nextlife.png" alt="Description of the image"></img>
            </div>
        </div>
       {footer}
        </div>  
  );
} 

export default Home;
