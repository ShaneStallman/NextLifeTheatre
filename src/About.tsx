
import React, { useState } from "react";
import {pageNavigation} from "./types";
import { buildFooter } from "./components/Footer.tsx";
import "./App.css";
import "./About.css"

const About = () => {
const footer = buildFooter();

  return (
    <div>
      <div className="aboutBlock" id="about">
        <h1 className = "aboutHead">About Us</h1>
        <h2 className = "missionHead">Operation: Next Life</h2>
        <p className = "aboutPar"> The theatrical community currently sits at a precarious point where it risks extinction. Next Life Theatre Company believes not only in the power of live performance, but the necessity for innovation within the medium. 
With Carmilla, Next Life is seeking to tell an old story that frames queerness as predatory in a new way that embraces not only the joy and heartache of authentic queer romance, but to tell it in a way that feels authentic to the queer community.

The existence of queerness is political and in this story the politics and safety of queerness is addressed, celebrated, and looks forward at what new spaces we may develop as a community going forwards.
        </p>
      </div>
       {footer} 
        </div>  
  );
} 

export default About;