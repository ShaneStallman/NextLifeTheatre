
import React, { useState } from "react";
import BuildFooter from "../src/components/Footer.tsx";
import Slideshow from "../src/components/slideshow.tsx";
import "./App.css";
import "./About.css"

const About = () => {

  return (
    <div>
      <div className="aboutBlock" id="about">
        <h1 className = "aboutHead">About Us</h1>
        <div className="aboutInfo">
        <h2 className = "missionHead">Our Mission</h2>
        <p className = "missionStatement"> 
        Next Life Theatre Company produces adaptations of classic plays, novels, and stories in new ways that seek to blur performance genres and mediums.
        </p>
        </div>
        <div className="aboutInfo">
        <h2 className = "missionHead">Operation: Next Life</h2>
        <p className = "aboutPar"> 
        The theatrical community currently sits at a precarious point where it risks extinction. Next Life Theatre Company believes not only in the power of live performance, but the necessity for innovation within the medium. <br/>
        <br/>
        Amélie Parczany, Brayden Stallman, Bethany Qian and Gretchen D'Amato meet at Muhlenberg College on their production of Jonathan Larson’s Tick, Tick… BOOM! and continued to work together to develop their workshop of the dance theater piece …even in another time.<br/>
        <br/>
        Next Life was formed to produce a Philadelphia Fringe theater piece that built on the foundations of …even in another time into what became Carmilla: A Dance with Death.
        </p>
        </div>
        <Slideshow/>
      </div>
       <BuildFooter/>
        </div>  
  );
} 

export default About;