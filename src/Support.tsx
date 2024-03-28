import React, { useState } from "react";
import {pageNavigation} from "./types";
import { buildFooter } from "./components/Footer.tsx";
import "./Support.css"

const Support = () => {
const footer = buildFooter();
  return (
    <div>
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
       {footer}
        </div>  
  );
} 

export default Support;