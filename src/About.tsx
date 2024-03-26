
import React, { useState } from "react";
import {pageNavigation} from "./types";
import { buildFooter } from "./Footer.tsx";
import "./App.css";
import "./About.css"

const About = () => {
const footer = buildFooter();

  return (
    <div>
      <div className="aboutBlock" id="about">
        <h1 className = "aboutHead">About Us</h1>
        <h2 className = "missionHead">Our Mission</h2>
        <p className = "aboutPar">
✧ EXCITING NEWS ✧
The Indiegogo campaign for our first production venture, Carmilla: A Dance with Death, is officially LIVE!

This will be a brand new iteration of a dance theatre piece based on the novella "Carmilla" by Joseph Sheridan le Fanu previously workshopped and developed by Amélie Parczany, Brayden Stallman, and Gretchen D'Amato at Muhlenberg College. This team will be joined by Bethany Qian to premiere the show during the 2024 Philadelphia Fringe Festival.

Carmilla plays with the existing tropes in vampire genre work while highlighting its innate tradition of queerness. Through a combination of dance and language, this piece seeks to push the boundaries of both the theatrical and concert dance forms.

We have some fun perks for supporters that we'll highlight over the next few weeks, but you can check them out right now at the link in our bio!</p>
      </div>
       {footer} 
        </div>  
  );
} 

export default About;