import React from "react";
import { Link } from 'react-router-dom';
//import {pageNavigation} from "./types";
import { teamInfo } from "./TeamInfo.tsx";
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
          <div className="cardName">{teamArray[index].name}</div>
          <img className="cardImg" src={teamArray[index].headshot} alt={teamArray[index].name} />
          <div className="cardBio">{teamArray[index].bio}</div>
          <Link to={`https://www.instagram.com/${teamArray[index].socials}/`}>@{teamInfo[index].socials}</Link>
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
  return (
    <div>
      {buildDisplay(teamInfo)}
      <footer className="pageFooter">
        <a href="#home" className="w3-button w3-light-grey">
          <i className="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div className="w3-xlarge w3-section">
          <i id="Facebook" className="fa fa-facebook-official w3-hover-opacity icon"></i>
          <i id="Instagram" className="fa fa-instagram w3-hover-opacity icon"></i>
          <i className="fa fa-snapchat w3-hover-opacity icon"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity icon"></i>
          <i className="fa fa-twitter w3-hover-opacity icon"></i>
          <i className="fa fa-linkedin w3-hover-opacity icon"></i>
        </div>
        <p>
          Developed by <a href="https://shanestallman.mystagingwebsite.com/" title="shane_stallman" target="_blank" className="selfLink">Shane Stallman</a>
        </p>
      </footer>
    </div>
  );
};

export default Team;
