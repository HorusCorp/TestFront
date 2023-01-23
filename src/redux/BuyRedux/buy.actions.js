import { LOAD_DATA } from "./buy.actionTypes";

let loadData = () => {
    return{
        type: LOAD_DATA,
        payload: 'load data'
    }
}

export {loadData}