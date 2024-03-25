
import React, { useState } from "react";
import {pageNavigation} from "./types";
import "./App.css"
import "./Home.css"
const Home = () => {

  return (
    <div>
        <div className="mainBody" id="home">
            <div className="mainImg">
              <img src="nextlife.png" alt="Description of the image"></img>
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
