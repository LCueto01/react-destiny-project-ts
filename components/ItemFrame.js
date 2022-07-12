
import React, { useEffect,useState,useContext } from 'react'
import { ItemGrid } from './ItemGrid'
import { baseContext } from './Base'


export default function ItemFrame({ itemList,updaterFunction }) {
  // the first item in the list is the currently equipped item
  const {equippedItems, setEquippedItems} = useContext(baseContext)
  const [equippedItem,setEquippedItem] = useState(itemList[0])
  let handleHover = true;

  const getRarity = (i) => {
    switch (i.rarity) {
      case "exotic":
        return "yellow";
      case "legendary":
        return "purple";
      case "rare":
        return "blue";
      case "uncommon":
        return "green";
      default:
        return "white"
    }
  }
  const itemRarity = getRarity(equippedItem)
  const frameStyle = {
    border: "2px solid white",
    width: "90px",
    height: "90px",
    marginBottom: "30px",
    marginLeft: "10px",
    backgroundColor: itemRarity,
  }

  useEffect( () => {
    updaterFunction(equippedItem.id,equippedItem.light_level,equippedItem.armor_slot)
    const newEquippedItems = {...equippedItems, [equippedItem.armor_slot]:{"id": equippedItem.id, "light_level": equippedItem.light_level}}
    setEquippedItems(newEquippedItems)
  },[equippedItem])
  return (

    <div >
      <div className = "itemContainer">
        <div style={frameStyle}>
          <h2 className = "itemWriting">{equippedItem.name}</h2>
          <h2 className = "itemWriting">{equippedItem.light_level}</h2>
          <h2 className = "itemWriting">{equippedItem.hasOwnProperty("slot")? equippedItem.slot : equippedItem.armor_slot}</h2>
      </div>
        {/*<ItemGrid/>*/}
      </div>
      

    </div>


  )
}


