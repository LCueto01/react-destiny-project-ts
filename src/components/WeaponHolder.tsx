import React,{useState} from 'react'
import SubClassHolder from './SubClassHolder'
import { weapon } from './Interfaces'
import ItemFrame from './ItemFrame'


import { primaryWeaponsData,secondaryWeaponsData, heavyWeaponsData } from './data'

export type weaponsContextType = (item: weapon) => void
export const weaponsContext = React.createContext<weaponsContextType | null>(null)

type Props = {
  lightSetter:(num:number)=> void
}
export default function WeaponHolder({lightSetter}) {
  const [equippedItems, setEquippedItems] = useState({
    head: 0,
    arms: 0,
    chest: 0,
    legs: 0,
    boots: 0,
    class_item: 0,
})
  const [primaries,setPrimaries] = useState(primaryWeaponsData)
  const [secondaries,setSecondaries] = useState(secondaryWeaponsData)
  const [heavies,setHeavies] = useState(heavyWeaponsData)

  const equipNewItem = (item: weapon):void => {
    console.log(item)
    //replaces item and updates ids

    const replaceWeapon = (foundItem:weapon, itemSource: Array<weapon>)=>{
        const copy = JSON.parse(JSON.stringify(itemSource))
        // it only worked if I did this for some reason??
        const matchingItem = copy.find(i => {return i.id === foundItem.id})
        const foundIndex = copy.indexOf(matchingItem!)
        copy[foundIndex] = copy[0]
        copy[0] = foundItem
       
        const copyArmorIds = {...equippedItems}
        //copyArmorIds[foundItem.armor_slot] = foundItem.id
        console.log(copyArmorIds)
    
        return copy 
    }
   

   
    
}
  return (
    <div className="weaponHolder">
      <SubClassHolder />
      <ItemFrame itemList = {primaries}/>
      <ItemFrame itemList = {secondaries}/>
      <ItemFrame itemList = {heavies}/>
    </div>
  )
}
