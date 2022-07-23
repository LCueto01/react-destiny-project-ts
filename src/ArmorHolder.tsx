import React, { useState,useEffect } from 'react'
import ItemFrame from './ItemFrame'
import { armor, weapon } from './Interfaces'
import StatHolder from './StatHolder'
import { headArmorData, chestArmorData, armsArmorData, legsArmorData, bootsArmorData, classItemsData } from './data'

export type equipContextType =  (item:armor | weapon) => void 


export const equipContext = React.createContext<equipContextType | null>(null)

 type armorIdTracker = {
    head: number,
    arms: number,
    chest: number,
    legs: number,
    boots: number,
    class_item: number
 }
 type Props = {
    lightSetter:(num:number)=> void
 }
export default function ArmorHolder({ lightSetter }:Props) {

    //records item ids
    const [equippedItems, setEquippedItems] = useState({
        head: 0,
        arms: 0,
        chest: 0,
        legs: 0,
        boots: 0,
        class_item: 0,
    })

    const [headData, setHeadData] = useState(headArmorData)
    const [armsData, setArmsData] = useState(armsArmorData)
    const [chestData,setChestData] = useState(chestArmorData)
    const [legsData, setLegData] = useState(legsArmorData)
    const [bootsData, setBootsData] = useState(bootsArmorData)
    const [classItemData, setClassItemData] = useState(classItemsData)


   const getEquippedItems = ():Array<armor> => {
        //console.log("this was done")
        const equippedArmour = [headData[0], armsData[0],chestData[0] , legsData[0], bootsData[0], classItemData[0]]
        return equippedArmour
    }

    const updateEquippedItems =(itemsArray:Array<armor>) =>{
        let sumLight = 0;
        itemsArray.forEach(i => {
            sumLight += i.light_level
            const armorIdCopy:any = equippedItems
            armorIdCopy[i.armor_slot] = i.id
            setEquippedItems(armorIdCopy)
        })
        lightSetter(sumLight)
    }
    
    const equipNewItem = (item:armor| weapon):void => {
        console.log(item)
        //replaces item and updates ids
        const replaceItem = (foundItem:armor, itemSource: Array<armor> ) =>{
            
          
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
        //checks if item is armor
       if("armor_slot" in item){
        switch(item.armor_slot){
            case "head":
                setHeadData(replaceItem(item,headData))
                break;
            case "arms":
                setArmsData(replaceItem(item,armsData))
                break;
            case "chest":
                setChestData(replaceItem(item,chestData))
                break;
            case "legs":
                setLegData(replaceItem(item,legsData))
                break;
            case "boots":
                setClassItemData(replaceItem(item,classItemData))
                break;
            default:
                break;
        }
        //for items that are weapons
       }else if("slot" in item){
       
       }
        
        
    }

    useEffect(() => {
        updateEquippedItems(getEquippedItems())
    },[headData,armsData,chestData,legsData,bootsData,classItemData])
    return (<>
        <StatHolder armorList = {getEquippedItems()}/>
        <div className="armorHolder">
            <equipContext.Provider value = {equipNewItem}>
                <ItemFrame itemList={headData} />
                <ItemFrame itemList={armsData} />
              
    
            <ItemFrame itemList = {chestData} />
            <ItemFrame itemList = {legsData} />
            <ItemFrame itemList = {bootsData} />
            <ItemFrame itemList = {classItemData}/>

            
            </equipContext.Provider>
        </div>
        </>
    )
}
