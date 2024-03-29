import React from "react";
import { buildFooter } from "./components/Footer.tsx";
import "./Join.css"
import { jobList } from "./TeamInfo.tsx";

const buildDisplay = (jobArray) => {
  const numCols = 3;
  const numRows = Math.ceil(jobArray.length / numCols);
  const jobBlocks: React.JSX.Element[] = [];

  for (let i = 0; i < numRows; i++) {
    const col: React.JSX.Element[] = [];
    for (let j = 0; j < numCols; j++) {
      const index = i * numCols + j;
      if (index >= jobArray.length) break;

      col.push(
        <div key={index} className="jobCard" onClick={() => console.log(jobArray[index])}>
          <div className="cardImgContainer">
            <img className="cardImg" src={jobArray[index].image} alt={jobArray[index].name}/>
            <div className="cardOverlay">
              <div className="jobName">{jobArray[index].name}</div>
              <div className="jobDescription">{jobArray[index].description}</div>
              <a href={`${jobArray[index].form}`} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          </div>
        </div>
      );
    }
    jobBlocks.push(
      <div key={i} className="jobList">
        {col}
      </div>
    );
  }

  return <div className="jobBlock">{jobBlocks}</div>;
};

const Join = () => {
const footer = buildFooter();
  return (
    <div>
        <div className="joinBlock" id="join">
            <h1 className="joinHeader"> Want to be a Part of Our Team? </h1>
            <div className="joinDiv">
              <h1>Want to Join our Team?</h1>
              <h2>We are looking for:</h2>
              <div className="jobEntries">
              {buildDisplay(jobList)}
              </div>
            </div>
        </div>
       {footer}
    </div>  
  );
} 

export default Join;