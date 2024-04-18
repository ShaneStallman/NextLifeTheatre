import React from "react";
import BuildFooter  from "../src/components/Footer.tsx";
import "./Join.css"
import { jobList } from "./TeamInfo.tsx";

const buildDisplay = (jobArray) => {
  const numCols = 1;
  const numRows = Math.ceil(jobArray.length / numCols);
  const jobBlocks: React.JSX.Element[] = [];

  for (let i = 0; i < numRows; i++) {
    const col: React.JSX.Element[] = [];
    for (let j = 0; j < numCols; j++) {
      const index = i * numCols + j;
      if (index >= jobArray.length) break;
      
      const jobs: React.JSX.Element[] = [];
      for(let k = 0; k < jobArray[index].roles.length; k++){
        jobs.push(
          <a className = "role">{jobArray[index].roles[k]}</a>
        )
      }
      
      col.push(
        <div key={index} className="jobCard" onClick={() => console.log(jobArray[index])}>
          <div className="cardImgContainer">
            <img className="cardImg" src={jobArray[index].image} alt={jobArray[index].name}/>
            <div className="jobCardOverlay">
              <div className="jobName">{jobArray[index].name}</div>
              <div className="jobDescription">{jobArray[index].description}</div>
                {jobs}
              <a className="formLink" href={`${jobArray[index].form}`} target="_blank" rel="noopener noreferrer">Apply Here</a>
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
  return (
    <div>
        <div className="joinBlock" id="join">
          <h1 className="joinHeader">Want to Join our Team?</h1>
            <div className="joinDiv">
              <p className="joinIntro">As we are a newly formed theatre group, we are looking for enthusiastic team members to work with us to 
                 build and grow our company with. We ideally want future focused, spirited and driven individuals
                 who will help us kick start this company and we look forward to hearing from you!
              </p>
              <h2 className="jobHeader">Current Auditions:</h2>
            </div>
            <div className="jobEntries">
                {buildDisplay(jobList)}
            </div>
        </div>
        <BuildFooter/>
    </div>  
  );
} 

export default Join;