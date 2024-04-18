import React from "react";
import {pageNavigation} from "./types";
import BuildFooter from "./components/Footer.tsx";
import "./Support.css"

const Support = () => {

  return (
    <div>
      <div className="supportBlock" id="support">
              <h1 className="supportHeader"> Want to Support Us? </h1>
              <div className="supportDiv">
                <div className="supportInfo">
                <h2 className="donateHeader supportInfoHeader"> Donate! </h2>
                <i className = "SupportText">Where?</i>
                <a className = "SupportText" href="https://www.indiegogo.com/projects/carmilla-a-dance-with-death#/">Donate on Indiegogo<br/></a>
                
                <p className = "SupportText">What will your donation provide?<br/>
                <br/>
                Next Life Theatre is currently seeking $3,000 to help fund this project.
                  <br/>
                  Funds will contribute to the following:
                </p>
                <ul className = "SupportText">
                  <li >Venue and rehearsal space rental costs</li>
                  <li >Limited production material for lights, sound, and costume pieces.</li>
                  <li >Stipends for dancers and designers</li>
                  <li >Administrative costs</li>
                </ul>
                <p className = "SupportText">We accept donations of any amount, but we also offer benefits for tiered donations you can check out below!</p>
                <iframe className="videoIntro" width="560" height="315" src="https://www.youtube.com/embed/P4FQmPHLGaE?si=cEDT50gmypd5aY-L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <h1 className="tierHeader">Tiered Donations</h1>
                <div className="donationTiers">
                <div className="top">
                  <a href="https://www.indiegogo.com/projects/carmilla-a-dance-with-death/payments/new#/review">
                    <img className="tiers" alt="apprentice" src="Apprentice.png"/>
                  </a>
                <div className="tierInfo">
                <i className="tierLabel">Tier 1: 25$</i>
                <ul>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband</li>
                </ul>
                </div>
                  <a href="https://www.indiegogo.com/projects/carmilla-a-dance-with-death/payments/new#/review">
                    <img className="tiers" alt="vampire" src="Vampire.png"/>
                  </a>
                <div className="tierInfo">
                <i className="tierLabel">Tier 3: 100$</i>
                <ul>
                  <li>A name on our lobby display</li>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband, Shot Tube, and Carmilla Sticker</li>
                </ul>
                </div>
                </div>
                <div className="bottom">
                <a href="https://www.indiegogo.com/projects/carmilla-a-dance-with-death/payments/new#/review">
                  <img className="tiers" alt="fledgling" src="Fledgling.png"/>
                </a>
                <div className="tierInfo">
                <i className="tierLabel">Tier 2: 50$</i>
                <ul>
                  <li>A name on our lobby display</li>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband</li>
                </ul>
                </div>
                  <a href="https://www.indiegogo.com/projects/carmilla-a-dance-with-death/payments/new#/review">
                    <img className="tiers" alt="vampireRoyalty" src="VampireRoyalty.png"/>
                  </a>
                <div className="tierInfo">
                <i className="tierLabel">Tier 4: 250$</i>
                <ul>
                  <li>A name on our lobby display</li>
                  <li>Show Billing as an Honorary Producers</li>
                  <li>Invitation to Final Dress</li>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband, Shot Tube, Carmilla Sticker and Carmilla T-Shirt</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div className="supportInfo">
                <h1 className="followHeader supportInfoHeader">Other Ways You Can Help!</h1>
                <p>If you want to support this project but don't have the financial means: share this with others!
                We also appreciate any level of involvement that you are interested in as we are a fledgeling company. Please feel free to reach out to nextlifetheatre@gmail.com with interests, skills, resumes, or questions!
                Follow us on Instagram and Facebook @nextlifetheatreco</p>
                </div>
              </div>
            </div>
            <BuildFooter/>
        </div>  
  );
} 

export default Support;