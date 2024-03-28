import React from "react";
import { buildFooter } from "./components/Footer.tsx";
import "./Join.css"

const Join = () => {
const footer = buildFooter();
  return (
    <div>
        <div className="joinBlock" id="join">
            <h1 className="joinHeader"> Want to be a Part of Our Team? </h1>
            <div className="joinDiv">
            </div>
        </div>
       {footer}
    </div>  
  );
} 

export default Join;