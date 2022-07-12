import React, { useState } from 'react'
import mobPng from "../images/mob.png"
import intPng from "../images/int.png"
import resPng from "../images/res.png"
import recPng from "../images/rec.png"
import discPng from "../images/disc.png"
import strengthPng from "../images/strength.png"

import ArmorHolder from './ArmorHolder'


// This has been moved to Base, keeping this component for now....
export default function StatHolder(stats) {

  const [charStats, setCharStats] = useState({
    "mobility": 0,
    "resilience": 0,
    "recovery": 0,
    "discipline": 0,
    "intellect": 0,
    "strength": 0
  })
  return (
    <div className="statsCont">
      <div className="stat">
        <p>mobility</p>
        <img className="statLogo" alt="mobility logo" src={mobPng}></img>
        <h2>{charStats.mobility}</h2>
      </div>

      <div className="stat">
        <p>resilience</p>
        <img className="statLogo" alt="resilience logo" src={resPng}></img>
        <h2>{charStats.resilience}</h2>
      </div>

      <div className="stat">
        <p>recovery</p>
        <img className="statLogo" alt="recovery logo" src={recPng}></img>
        <h2>{charStats.recovery}</h2>
      </div>

      <div className="stat">
        <p>discipline</p>
        <img className="statLogo" alt="recovery logo" src={discPng}></img>
        <h2>{charStats.discipline}</h2>
      </div>

      <div className="stat">
        <p>intellect</p>
        <img className="statLogo" alt="recovery logo" src={intPng}></img>
        <h2>{charStats.intellect}</h2>
      </div>

      <div className="stat">
        <p>strength</p>
        <img className="statLogo" alt="recovery logo" src={strengthPng}></img>
        <h2>{charStats.strength}</h2>
      </div>
      
    </div>
  )
}
