
import React, { useState } from "react";
import {pageNavigation} from "./types";
import "./App.css";
import "./About.css"

const About = () => {


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
       <footer className="pageFooter">
            <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
            <div className="w3-xlarge w3-section">
              <i id="Facebook"  className="fa fa-facebook-official w3-hover-opacity icon"></i>
              <i id="Instagram" className="fa fa-instagram w3-hover-opacity icon"></i>
              <i className="fa fa-snapchat w3-hover-opacity icon"></i>
              <i className="fa fa-pinterest-p w3-hover-opacity icon"></i>
              <i className="fa fa-twitter w3-hover-opacity icon"></i>
              <i className="fa fa-linkedin w3-hover-opacity icon"></i>
            </div>
            <p>Developed by <a href="https://shanestallman.mystagingwebsite.com/" title="shane_stallman" target="_blank" className="selfLink">Shane Stallman</a></p>
          </footer> 
        </div>  
  );
} 

export default About;