import React, { useState } from "react";
import {pageNavigation} from "./types";
import { buildFooter } from "./components/Footer.tsx";
import "./Work.css";

const Work = () => {
const footer = buildFooter();
  return (
    <div>
      <div className="workBlock" id="work">
      <h1 className="workHeader">What We Are Working On</h1>
      <h2 className="workHeader">Carmilla</h2>
      <p>"Info on the Fringe Festival and the show</p>
      <iframe className="videoIntro" width="560" height="315" src="https://www.youtube.com/embed/P4FQmPHLGaE?si=cEDT50gmypd5aY-L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
       {footer}
        </div>  
  );
} 

export default Work;