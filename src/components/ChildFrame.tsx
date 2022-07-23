import React,{useContext} from 'react'
import { equipContext,equipContextType } from './ArmorHolder'
import { weaponsContext,weaponsContextType } from './WeaponHolder'
import { weapon,armor } from './Interfaces'



type Props = {
  item: armor | weapon
  renderRarity: (item: armor| weapon) => string
}
export const ChildFrame = ({item, renderRarity}:Props) => {
  
  const equipNewItem = useContext(equipContext) as equipContextType
  const equipNewWeapon = useContext(weaponsContext) as weaponsContextType
  
  const itemRarity = renderRarity(item)
 
  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginLeft: "2px",
    backgroundColor: itemRarity,
  }
    
  return (

    <div onClick = {() =>  equipNewItem(item)} style={frameStyle}>
      <h2 className = "itemWriting">{item.name}</h2>
      <h2 className = "itemWriting">{item.light_level}</h2>
    
  </div>
  
  )
}
