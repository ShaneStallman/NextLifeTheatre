
import React, { useState } from "react";
import {pageNavigation} from "./types";

const Home: React.FC<pageNavigation> = ({setPage}) => {

  return (
    <div>
        <div className="nav-banner">
            <div className="navBar" id="myNavbar">
              <a onClick={() => setPage("home")} className="w3-bar-item w3-button w3-wide">Next Life Theatre Co.</a>
              <div className="w3-right w3-hide-small">
                <a onClick={() => setPage("work")} className="w3-bar-item w3-button"><i className="fa fa-th icon"></i> WORK</a>
                <a onClick={() => setPage("about")}className="w3-bar-item w3-button">ABOUT</a>
                <a onClick={() => setPage("team")} className="w3-bar-item w3-button"><i className="fa fa-user icon"></i> Meet Us</a>              
                <a onClick={() => setPage("support")} className="w3-bar-item w3-button"><i className="fa fa-usd icon"></i> Support Us</a>
              </div>
            </div>
        </div>
        <div className="mainBody" id="home">
            <div className="mainImg">
          
            </div>
            <div className="workBlock" id="work">

            </div>
            <div className="aboutBlock" id="about">

            </div>
            <div className="teamBlock" id="team">
              <h1 className="teamHeader"> Meet the Team</h1>
              <div className="teamList">
                
                <div className="teamInfo">

                </div>
                <div className="teamInfo">

                </div>
                <div className="teamInfo">

                </div>
                <div className="teamInfo">

                </div>
              </div>
            </div>
            <div className="supportBlock" id="support">
              <h1 className="supportHeader"> Want to Support Us? </h1>
              <div className="supportDiv">
                <div className="supportInfo">
                <h3 className="donateHeader supportInfoHeader"> Donate! </h3>
                </div>
                <div className="supportInfo">
                <h3 className="followHeader supportInfoHeader"> Follow Us! </h3>
                </div>
              </div>
            </div>
            <div className="contactBlock" id="contact">

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

export default Home;
