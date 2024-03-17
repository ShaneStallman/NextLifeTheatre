import React, { useState } from "react";
import {pageNavigation} from "./types";

const Work: React.FC<pageNavigation> = ({ setPage }) => {


  return (
    <div>
        <div className="nav-banner">
            <div className="navBar" id="myNavbar">
              <a href = "#" onClick={() => setPage("home")} className="w3-bar-item w3-button w3-wide">Next Life Theatre Co.</a>
              <div className="w3-right w3-hide-small">
                <a onClick={() => setPage("work")} className="w3-bar-item w3-button"><i className="fa fa-th icon"></i> WORK</a>
                <a onClick={() => setPage("about")}className="w3-bar-item w3-button">ABOUT</a>
                <a onClick={() => setPage("team")} className="w3-bar-item w3-button"><i className="fa fa-user icon"></i> Meet Us</a>              
                <a onClick={() => setPage("support")} className="w3-bar-item w3-button"><i className="fa fa-usd icon"></i> Support Us</a>
              </div>
            </div>
        </div>
       <footer className="pageFooter">
            
            <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
            <div className="w3-xlarge w3-section">
              <i id="Facebook" className="fa fa-facebook-official w3-hover-opacity icon"></i>
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

export default Work;