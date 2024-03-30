import React from "react";
import { Link } from 'react-router-dom';
//import {pageNavigation} from "./types";
import { teamInfo } from "./TeamInfo.tsx";
import { buildFooter } from "./components/Footer.tsx";
import "./Team.css";

const buildDisplay = (teamArray) => {
  const numCols = 3;
  const numRows = Math.ceil(teamArray.length / numCols);
  const teamBlocks: React.JSX.Element[] = [];

  for (let i = 0; i < numRows; i++) {
    const col: React.JSX.Element[] = [];
    for (let j = 0; j < numCols; j++) {
      const index = i * numCols + j;
      if (index >= teamArray.length) break;

      col.push(
        <div key={index} className="teamCard" onClick={() => console.log(teamArray[index])}>
          <div className="cardImgContainer">
            <img className="cardImg" src={teamArray[index].headshot} alt={teamArray[index].name}/>
            <div className="cardOverlay">
              <div className="cardName">{teamArray[index].name}</div>
              <div className="cardBio">{teamArray[index].bio}</div>
              <a href={`https://www.instagram.com/${teamArray[index].socials}/`} target="_blank" rel="noopener noreferrer">
                <i id="Instagram" className="fa fa-instagram w3-hover-opacity icon"></i> Instagram: @{teamArray[index].socials}
              </a>
            </div>
          </div>
        </div>
      );
    }
    teamBlocks.push(
      <div key={i} className="teamList">
        {col}
      </div>
    );
  }

  return <div className="teamBlock">{teamBlocks}</div>;
};

const Team = () => {
const footer = buildFooter();
  return (
    <div className="teamBlock">
      <h1 className="teamHeader">Meet the Team</h1>
      {buildDisplay(teamInfo)}
      <div className="joinUsDiv">
        <Link onClick={() => window.scrollTo(0, 0)} to="/join" className="joinHeader"> You Can Join Us Too! </Link>
      </div>
      {footer}
    </div>
  );
};

export default Team;
