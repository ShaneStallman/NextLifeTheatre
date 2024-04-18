import React from "react";
import { Link } from "react-router-dom";
import BuildFooter from "./components/Footer.tsx";
import { carmilla } from "./TeamInfo.tsx";
import "./Work.css";

const Work = () => {

  return (
    <div>
      <div className="workBlock" id="work">
      <div className="carmillaContainer">
        <img src={carmilla.image} alt="carmilla" className="carmillaImg"></img>    
            <div className="infoOverlay">
              <div className="carmillaInfo">
                <p><i className="carmillaName">{carmilla.name}</i><br/>{carmilla.location}<br/><br/>
                <i className="date">{carmilla.date}</i><br/><br/>
                An Original Screenplay<br/>
                Written and Directed by <Link to="/team">{carmilla.director}</Link><br/>
                Choreographed by <Link to="/team" onClick={() => window.scrollTo(0, 0)}>{carmilla.choreo}</Link><br/>
                Adapted from {carmilla.inspiration}<br/>
                Located at {carmilla.location}<br/><br/>
                <i className="summary">Carmilla: A Dance with Death is a dance-theatre play based on the novella Carmilla by Joseph Sheridan le Fanu. This production will be mounted for performance during Philadelphia Fringe Festival 2024 and is the first venture of the Next Life Theatre Company. 
                This will be a brand new iteration of a dance theatre piece previously workshopped and developed by Amélie Parczany, Brayden Stallman, and Gretchen D'Amato at Muhlenberg College. 
                Carmilla plays with the existing tropes in vampire genre work while highlighting it's innate tradition of queerness. Through a combination of dance and language this piece seeks to push the boundaries of both the theatrical and concert dance forms. </i><br/><br/>
                <Link to="/join" onClick={() => window.scrollTo(0, 0)}>Apply Here</Link>
                </p>
              </div>
            </div>
          </div>
      <div className="blackBackground"></div>
      <h1>Learn More!</h1>
      <iframe className="videoIntro" width="560" height="315" src="https://www.youtube.com/embed/P4FQmPHLGaE?si=cEDT50gmypd5aY-L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <h1>Past Show Highlights</h1>
      <iframe className="videoIntro" width="560" height="315" src="https://www.youtube.com/embed/0LSCPasqHRA?si=oeMdlKlhuhTZTcxw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <BuildFooter/>
        </div>  
  );
} 

export default Work;