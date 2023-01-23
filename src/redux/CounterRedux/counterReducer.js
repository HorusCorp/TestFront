export function counterReducer(state = 1500, action){
    switch(action.type){
        case"DECREMENT" :
            return state -= action.payload;
        default :return state
    }
}