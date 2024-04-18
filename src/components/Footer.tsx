import React, {useState} from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../TeamInfo.tsx";
import "./Footer.css";

const BuildFooter = () => {

    return (
    <footer className="pageFooter">
            {/* <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>*/}
              <div className="middle">
                <a id="subscribe" href="https://forms.gle/3cy2oFT99chJfzCj7" className="newsletter">Join Our Mailing List!</a>
                <a href={`mailto:${contactInfo.email}`} className="fa fa-envelope icon">&nbsp;{contactInfo.email}</a>
                <div className="w3-xlarge w3-section socials">
                  <a id="Facebook" href="https://www.facebook.com/profile.php?id=61557075519477" className="fa fa-facebook-official w3-hover-opacity icon"></a>
                  <a id="Instagram" href="https://www.instagram.com/nextlifetheatreco/" className="fa fa-instagram w3-hover-opacity icon"></a>
                  <a href="https://www.youtube.com/channel/UCBLLXrj-4E10mcXB3xnhsZA" className="fa fa-youtube-play w3-hover-opacity icon"></a>
                </div>
                <p>For more information, read our <Link to="/privacy_policy">Privacy Policy</Link>.</p>
                <p className="selfLink">Developed by <a href="https://github.com/ShaneStallman" title="shane_stallman" target="_blank" className="selfLink"><i className="selfLink fa fa-github icon"></i>Shane Stallman</a></p>
                
              </div>
              
          </footer>
    )
};

export default BuildFooter;
