import React from 'react'
import SubClassHolder from './SubClassHolder'
import ItemFrame from './ItemFrame'

import { primaryWeaponsData,secondaryWeaponsData,heavyWeaponsData } from './data'

const primaries = primaryWeaponsData
const secondaries = secondaryWeaponsData
const heavies = heavyWeaponsData

export default function WeaponHolder() {
  return (
    <div className="weaponHolder">
      <SubClassHolder />
      <ItemFrame itemList = {primaries}/>
      <ItemFrame itemList = {secondaries}/>
      <ItemFrame itemList = {heavies}/>
    </div>
  )
}
