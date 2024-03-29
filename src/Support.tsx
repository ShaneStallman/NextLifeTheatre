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
                <h2 className="donateHeader supportInfoHeader"> Donate! </h2>
                <i>Donate on Indegogo</i>
                <i>What will your donation provide?</i>
                <p>Next Life Theatre is currently seeking $3,000 to help fund this project.

                  Funds will contribute to the following:
                </p>
                <ul>
                  <li>Venue and rehearsal space rental costs</li>
                  <li>Limited production material for lights, sound, and costume pieces.</li>
                  <li>Stipends for dancers and designers</li>
                  <li>Administrative costs</li>
                </ul>
                <h2 className="tierHeader">Tiered Donations</h2>
                <div className="donationTiers">
                <div className="top">
                <img className="tiers" alt="apprentice" src="Apprentice.png"/>
                <div className="tierInfo">
                <i className="tierLabel">Tier 1: 25$</i>
                <ul>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband</li>
                </ul>
                </div>
                <img className="tiers" alt="vampire" src="Vampire.png"/>
                <div className="tierInfo">
                <i className="tierLabel">Tier 3: 100$</i>
                <ul>
                  <li>A name on our lobby display</li>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband, Shot Tube, and Carmilla Sticker</li>
                </ul>
                </div>
                </div>
                <div className="bottom">
                <img className="tiers" alt="fledgling" src="Fledgling.png"/>
                <div className="tierInfo">
                <i className="tierLabel">Tier 2: 50$</i>
                <ul>
                  <li>A name on our lobby display</li>
                  <li>A Commemorative "Electric Chapel" Nightclub Wristband</li>
                </ul>
                </div>
                <img className="tiers" alt="vampireRoyalty" src="VampireRoyalty.png"/>
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
                <h3 className="followHeader supportInfoHeader">Other Ways You Can Help!</h3>
                <p>If you want to support this project but don't have the financial means: share this with others!

We also appreciate any level of involvement that you are interested in as we are a fledgeling company. Please feel free to reach out to nextlifetheatre@gmail.com with interests, skills, resumes, or questions!

Follow us on Instagram and Facebook @nextlifetheatreco</p>
                </div>
              </div>
            </div>
       {footer}
        </div>  
  );
} 

export default Support;