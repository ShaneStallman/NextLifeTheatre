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
          <h1 className="joinHeader">Want to Join our Team?</h1>
            <div className="joinDiv">
              <p className="joinIntro">As we are a newly formed theatre group, we are looking for enthusiastic team members to work with us to 
                 build and grow our company with. We ideally want future focused, spirited and driven individuals
                 who will help us kick start this company and we look forward to hearing from you!
              </p>
              <h2 className="jobHeader">We are looking for:</h2>
            </div>
            <div className="jobEntries">
                {buildDisplay(jobList)}
            </div>
        </div>
       {footer}
    </div>  
  );
} 

export default Join;