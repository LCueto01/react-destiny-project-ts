import React, { useState, useEffect } from 'react'
import ItemFrame from "./ItemFrame.js"
import StatHolder from './StatHolder.js'
import CurrenciesHolder from './CurrenciesHolder.js'
import SubClassHolder from './SubClassHolder.js'
import ArmorHolder from './ArmorHolder.js'
import WeaponHolder from './WeaponHolder.js'

export const baseContext = React.createContext(0);

const Base = () => {
  const [sumLight, setSumLight] = useState(0);
  const [equippedItems, setEquippedItems] = useState({
    primary: { id: 0, light_level: 0 },
    secondary: { id: 0, light_level: 0 },
    heavy: { id: 0, light_level: 0 },
    head: { id: 0, light_level: 0 },
    arms: { id: 0, light_level: 0 },
    chest: { id: 0, light_level: 0 },
    legs: { id: 0, light_level: 0 },
    boots: { id: 0, light_level: 0 },
    class_item: { id: 0, light_level: 0 },
  })


  const updateEquippedItem = (itemId:number, itemLight:number, itemSlot:string) => {
    let newEquippedItems = {...equippedItems,[itemSlot]: { id: itemId, light_level: itemLight } }
    //console.log("id: " + itemId + " light"+ itemLight + " " + itemSlot)
    setEquippedItems(newEquippedItems)
    //console.log(equippedItems)
  }


  function updateLightLevel() {
    Object.keys(equippedItems).forEach(key => {
      setSumLight(prevSum => prevSum += equippedItems[key]["light_level"])
    })

  }

  useEffect(() => {
    updateLightLevel()
    console.log(equippedItems)
  }, [equippedItems])

  return (

    <div className="Page">

      <div className="topBanner">

      </div>

      <div className='characterScreen'>
        {/*WeaponHolder*/}
        <div className="backgroundCharacter"></div>

        <div className="statsBar">
          <CurrenciesHolder></CurrenciesHolder>

          <div className="lightContainer">
            <h1>Light Level</h1>
            <h1>{sumLight/9}</h1>
          </div>

          <StatHolder />
          <baseContext.Provider value = {{updateEquippedItem}}>
            <ArmorHolder updaterFunction={updateEquippedItem}/>
          </baseContext.Provider>
          
         
        </div>
      </div>
    </div>

  )
}
export default Base
