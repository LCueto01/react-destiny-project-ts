import React, { useState, useEffect, useCallback } from "react";

import CurrenciesHolder from "./CurrenciesHolder";
import SubClassHolder from "./SubClassHolder";
import ArmorHolder from "./ArmorHolder";
import WeaponHolder from "./WeaponHolder";

export const baseContext = React.createContext(0);

const CharacterScreen = () => {
  const [armorLight, setArmorLight] = useState(0);
  const [weaponLight, setWeaponLight] = useState(0);

  const getArmorLight = (newLight: number) => {
    setArmorLight(newLight);
  };

  const getWeaponLight = (newLight: number) => {
    setWeaponLight(newLight);
  };
  return (
    <div className="Page">
      <div className="topBanner"></div>

      <div className="characterScreen">
        <WeaponHolder lightSetter={setWeaponLight} />
        <div className="backgroundCharacter"></div>

        <div className="statsBar">
          <CurrenciesHolder></CurrenciesHolder>
          <div className="lightContainer">
            <h1>Light Level</h1>
            <h1>{Math.floor(armorLight / 9)}</h1>
          </div>
          <ArmorHolder lightSetter={setArmorLight} />
        </div>
      </div>
    </div>
  );
};
export default CharacterScreen;
