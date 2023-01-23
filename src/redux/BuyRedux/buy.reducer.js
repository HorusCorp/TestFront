import { LOAD_DATA } from "./buy.actionTypes";

export const BUY_KEY = 'buyStore'

let initialState = [
    {   
        "id": 0,
        "key": "wood_sword",
        "name": "Wood Sword",
        "cost": 15,
        "damage": 1,
        "integrity": 1
    },
    {   "id": 1,
        "key": "iron_sword",
        "name": "Iron Sword",
        "cost": 45,
        "damage": 5,
        "integrity": 3.5
    },
    {   "id": 2,
        "key": "silver_sword",
        "name": "Silver Sword",
        "cost": 70,
        "damage": 12,
        "integrity": 2
    },
    {   "id": 3,
        "key": "diamond_sword",
        "name": "Diamond Sword",
        "cost": 148,
        "damage": 25,
        "integrity": 9
    },
    {   "id": 4,
        "key": "gold_sword",
        "name": "Gold Sword",
        "cost": 180,
        "damage": 40,
        "integrity": 1.75
    },
    {   "id": 5,
        "key": "wood_axe",
        "name": "Wood Axe",
        "cost": 10,
        "damage": 1,
        "integrity": 1
    },
    {   "id": 6,
        "key": "iron_axe",
        "name": "Iron Axe",
        "cost": 30,
        "damage": 1,
        "integrity": 3.5
    },
    {   "id": 7,
        "key": "silver_axe",
        "name": "Silver Axe",
        "cost": 60,
        "damage": 1,
        "integrity": 2
    },
    {   "id": 8,
        "key": "diamond_axe",
        "name": "Diamond Axe",
        "cost": 140,
        "damage": 1,
        "integrity": 9
    },
    {   "id": 9,
        "key": "gold_axe",
        "name": "Gold Axe",
        "cost": 180,
        "damage": 1,
        "integrity": 1.75
    },
    {   "id": 10,
        "key": "wood_mass",
        "name": "Wood Mass",
        "cost": 25,
        "damage": 1,
        "integrity": 1
    },
    {   "id": 11,
        "key": "iron_mass",
        "name": "Iron Mass",
        "cost": 60,
        "damage": 1,
        "integrity": 3.5
    },
    {   "id": 12,
        "key": "silver_mass",
        "name": "Silver Mass",
        "cost": 98,
        "damage": 1,
        "integrity": 2
    },
    {   "id": 13,
        "key": "diamond_mass",
        "name": "Diamond Mass",
        "cost": 190,
        "damage": 1,
        "integrity": 9
    },
    {   "id": 14,
        "key": "gold_mass",
        "name": "Gold Mass",
        "cost": 240,
        "damage": 1,
        "integrity": 1.75
    },
    {   "id": 15,
        "key": "wood_2hds_sword",
        "name": "Wood 2hds Sword",
        "cost": 65,
        "damage": 1,
        "integrity": 1
    },
    {   "id": 16,
        "key": "iron_2hds_sword",
        "name": "Iron 2hds Sword",
        "cost": 105,
        "damage": 1,
        "integrity": 3.5
    },
    {   "id": 17,
        "key": "silver_2hds_sword",
        "name": "Silver 2hds Sword",
        "cost": 450,
        "damage": 350,
        "integrity": 2
    },
    {   "id": 18,
        "key": "diamond_2hds_sword",
        "name": "Diamond 2hds Sword",
        "cost": 850,
        "damage": 135,
        "integrity": 9
    },
    {   "id": 19,
        "key": "gold_2hds_sword",
        "name": "Gold 2hds Sword",
        "cost": 999,
        "damage": 160,
        "integrity": 1.75
    }
];

let buyReducer = (state= initialState, action) => {
    let {type, payload} = action
    switch(type){
        case LOAD_DATA:
            return{
                ...state,
                ...payload
            }
            default: return state
    }
}

export {buyReducer}