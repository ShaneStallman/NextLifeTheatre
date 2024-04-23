import React from "react";
import { Link } from 'react-router-dom';
//import {pageNavigation} from "./types";
import { teamInfo, roleList } from "./TeamInfo.tsx";
import BuildFooter  from "./components/Footer.tsx";
import "./Team.css";

const buildDisplay = (teamArray) => {
  const numRows = Math.ceil(roleList.length);
  const teamBlocks: React.JSX.Element[] = [];

  for (let i = 0; i < numRows; i++) {
    const col: React.JSX.Element[] = [];
    for(let j = 0; j < teamArray.length; j++){
     const index = j;
     console.log(teamArray[index].role);
     console.log(roleList[i]);
    if(teamArray[index].roletype === roleList[i]){
      
      col.push(
        <div key={index} className="teamCard" onClick={() => console.log(teamArray[index])}>
          <div className="cardImgContainer">
            <img className="cardImgTeam" src={teamArray[index].headshot} alt={teamArray[index].name}/>
            <div className="cardOverlay">
              <div className="cardName">{teamArray[index].name}</div>
              <div className="cardRole">{teamArray[index].role}</div>
              <div className="cardBio">{teamArray[index].bio}</div>
              <a href={`https://www.instagram.com/${teamArray[index].socials}/`} target="_blank" rel="noopener noreferrer">
                <i id="Instagram" className="fa fa-instagram w3-hover-opacity icon"></i> Instagram: @{teamArray[index].socials}
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
    teamBlocks.push(
      <div key={i} className="teamList">
        <h1 className="roleHeader">{roleList[i]}</h1>
        <div className="cards">
         {col}
        </div>
      </div>
    );
  }

  return <div className="teamBlock">{teamBlocks}</div>;
};

const Team = () => {

  return (
    <div className="teamBlock">
      <h1 className="teamHeader">Meet the Team</h1>
      {buildDisplay(teamInfo)}
      <div className="joinUsDiv">
        <Link onClick={() => window.scrollTo(0, 0)} to="/join" className="joinHeader"> You Can Join Us Too! </Link>
      </div>
      <BuildFooter/>
    </div>
  );
};

export default Team;
