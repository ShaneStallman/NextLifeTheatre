import React from "react";
import { contactInfo } from "../TeamInfo.tsx";
import "./Footer.css";

const buildFooter = () => {
    return (
    <footer className="pageFooter">
            {/* <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>*/}
            <div className="address">
                <i className="mailingTitle"> Mailing Address</i>
                <i>{contactInfo.mailing.name}</i>
                <i>{contactInfo.mailing.address}</i>
                <i>{contactInfo.mailing.city} &nbsp;{contactInfo.mailing.state}, &nbsp;{contactInfo.mailing.zip}</i>
              </div>
              <div className="middle">
                <div className="w3-xlarge w3-section socials">
                  <a id="Facebook" href="https://www.facebook.com/profile.php?id=61557075519477" className="fa fa-facebook-official w3-hover-opacity icon"></a>
                  <a id="Instagram" href="https://www.instagram.com/nextlifetheatreco/" className="fa fa-instagram w3-hover-opacity icon"></a>
                  <a className="fa fa-snapchat w3-hover-opacity icon"></a>
                  <a className="fa fa-pinterest-p w3-hover-opacity icon"></a>
                  <a className="fa fa-twitter w3-hover-opacity icon"></a>
                  <a className="fa fa-linkedin w3-hover-opacity icon"></a>
                </div>
                <p className="selfLink">Developed by <a href="https://github.com/ShaneStallman" title="shane_stallman" target="_blank" className="selfLink"><i className="selfLink fa fa-github icon"></i>Shane Stallman</a></p>
              </div>
            <div className="contactInfo">
              <a href={`mailto:${contactInfo.email}`} className="fa fa-envelope icon">&nbsp;{contactInfo.email}</a>
              <a href={`tel:${contactInfo.phone}`} className="fa fa-phone icon">&nbsp;{contactInfo.phone}</a>
            </div>
          </footer>
    )
};

export {buildFooter};
