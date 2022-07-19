import React from 'react'
import SubClassHolder from './SubClassHolder'
import ItemFrame from './ItemFrame'

const primaryWeapons = [
  {
    "id": 51,
    "light_level": 1600,
    "name": "systemic",
    "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "slot": "primary",
    "weapon_type": "shotgun",
    "rarity": "rare",
    "impact": 48,
    "range": 42,
    "reload": 25,
    "stability": 57,
    "rpm": 686,
    "magazine_size": 26
  },
  {
    "id": 52,
    "light_level": 1542,
    "name": "Universal",
    "description": "Proin at turpis a pede posuere nonummy. Integer non velit.",
    "slot": "primary",
    "weapon_type": "pulse_rifle",
    "rarity": "rare",
    "impact": 16,
    "range": 80,
    "reload": 47,
    "stability": 29,
    "rpm": 648,
    "magazine_size": 22
  }]

const secondary = [{
  "id": 54,
  "light_level": 1469,
  "name": "monitoring",
  "description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
  "slot": "secondary",
  "weapon_type": "pulse_rifle",
  "rarity": "exotic",
  "impact": 30,
  "range": 85,
  "reload": 86,
  "stability": 90,
  "rpm": 354,
  "magazine_size": 62
},
{
  "id": 56,
  "light_level": 1537,
  "name": "standardization",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
  "slot": "secondary",
  "weapon_type": "rocket",
  "rarity": "exotic",
  "impact": 30,
  "range": 100,
  "reload": 36,
  "stability": 92,
  "rpm": 360,
  "magazine_size": 77
}]

const heavy = [{
  "id": 55,
  "light_level": 1487,
  "name": "Function-based",
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
  "slot": "heavy",
  "weapon_type": "fusion_rifle",
  "rarity": "uncommon",
  "impact": 69,
  "range": 84,
  "reload": 38,
  "stability": 24,
  "rpm": 490,
  "magazine_size": 95
},
{
  "id": 61,
  "light_level": 1554,
  "name": "tangible",
  "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
  "slot": "heavy",
  "weapon_type": "auto_rifle",
  "rarity": "legendary",
  "impact": 86,
  "range": 94,
  "reload": 68,
  "stability": 94,
  "rpm": 398,
  "magazine_size": 24
}]

export default function WeaponHolder() {
  return (
    <div className="weaponHolder">
      <SubClassHolder />
      <ItemFrame itemList = {primaryWeapons}/>
      <ItemFrame itemList = {secondary}/>
      <ItemFrame itemList = {heavy}/>
    </div>
  )
}
