interface wearableitem {
    id: number,
    light_level: number,
    name: string,
    description: string,
    rarity: string
}

export interface armorstats {
    mobility: number,
    resilience: number,
    recovery: number,
    discipline: number,
    intellect: number,
    strength: number
}

export interface armor extends wearableitem,armorstats {
    armor_slot: string,
}

export interface weapon extends wearableitem {
    slot: string,
    weapon_type: string,
    impact: number,
    range: number,
    reload: number,
    stability: number,
    rpm: number,
    magazine_size: number

}
export interface equippedItem{

}

export interface equippedItems{

    primary: { id: number, light_level: number },
    secondary: { id: number, light_level: number },
    heavy: { id: number, light_level: number },
    head: { id: number, light_level: number },
    arms: { id: number, light_level: number },
    chest: { id: number, light_level: number  },
    legs: { id: number, light_level: number },
    boots: { id: number, light_level: number  },
    class_item: { id: number, light_level: number  },

}
