import React, { useState, useEffect } from "react";

import ArmorHolder from "./ArmorHolder";

// This has been moved to Base, keeping this component for now....
export default function StatHolder({ armorList }) {
  const [charStats, setCharStats] = useState({
    mobility: 0,
    resilience: 0,
    recovery: 0,
    discipline: 0,
    intellect: 0,
    strength: 0,
  });

  const updateStats = () => {
    //resets stats for new calculation
    const newStats = {
      mobility: 0,
      resilience: 0,
      recovery: 0,
      discipline: 0,
      intellect: 0,
      strength: 0,
    };
    armorList.forEach((element) => {
      const {
        mobility,
        resilience,
        recovery,
        discipline,
        intellect,
        strength,
      } = element;
      newStats["mobility"] += mobility;
      newStats["resilience"] += resilience;
      newStats["recovery"] += recovery;
      newStats["discipline"] += discipline;
      newStats["intellect"] += intellect;
      newStats["strength"] += strength;
    });
    setCharStats(newStats);
    console.log(newStats);
  };

  useEffect(() => {
    updateStats();
  }, [armorList]);

  return (
    <div className="statsCont">
      <div className="stat">
        <p>mobility</p>
        <img
          className="statLogo"
          alt="mobility logo"
          //src={require("../images/mob.png")}
        ></img>
        <h2>{charStats.mobility / 6)}</h2>
      </div>

      <div className="stat">
        <p>resilience</p>
        <img
          className="statLogo"
          alt="resilience logo"
          //src={require("../images/res.png")}
        ></img>
        <h2>{parseInt(charStats.resilience / 6)}</h2>
      </div>

      <div className="stat">
        <p>recovery</p>
        <img
          className="statLogo"
          alt="recovery logo"
          //src={require("../images/rec.png")}
        ></img>
        <h2>{parseInt(charStats.recovery / 6)}</h2>
      </div>

      <div className="stat">
        <p>discipline</p>
        <img
          className="statLogo"
          alt="recovery logo"
          //src={require("../images/disc.png")}
        ></img>
        <h2>{parseInt(charStats.discipline / 6)}</h2>
      </div>

      <div className="stat">
        <p>intellect</p>
        <img
          className="statLogo"
          alt="recovery logo"
          //src={require("../images/int.png")}
        ></img>
        <h2>{parseInt(charStats.intellect / 6)}</h2>
      </div>

      <div className="stat">
        <p>strength</p>
        <img
          className="statLogo"
          alt="recovery logo"
          //src={require("../images/strength.png")}
        ></img>
        <h2>{parseInt(charStats.strength / 6)}</h2>
      </div>
    </div>
  );
}
StatHolder.defaultProps = {
  armorList: [
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "head",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "arms",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "chest",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "legs",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "boots",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
    {
      id: 0,
      light_level: 0,
      name: "",
      description: "",
      armor_slot: "class_item",
      rarity: "",
      mobility: 0,
      intellect: 0,
      resilience: 0,
      recovery: 0,
      strength: 0,
      discipline: 0,
    },
  ],
};
