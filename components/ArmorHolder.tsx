import React from 'react'
import ItemFrame from './ItemFrame'
import { headArmorData,chestArmorData,armsArmorData,legsArmorData,bootsArmorData,classItemsData} from './data'

export default function ArmorHolder({updaterFunction}) {

    const headArmor = headArmorData
    const chestArmor = chestArmorData
    const legsArmor = legsArmorData
    const bootsArmor = bootsArmorData
    const armsArmor = armsArmorData
    const classItems = classItemsData

    // tried to pass updaterFunction to itemFrame with context, didn't work
    return (
        <div className="armorHolder">
            <ItemFrame itemList = {headArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {armsArmor} updaterFunction = {updaterFunction}/>
            {/*
             <ItemFrame itemList = {armsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {chestArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {legsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {bootsArmor} updaterFunction = {updaterFunction}/>
            <ItemFrame itemList = {classItems}updaterFunction = {updaterFunction}/>

            */}
        </div>
    )
}
