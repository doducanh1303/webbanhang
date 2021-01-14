 import * as types from './../contant/action';
const InitialState =[]

const product = (state = InitialState, action) => {
    var index=-1;
    var {user} = action;
    switch (action.type) {
        case types.SUB_TOTAL:
             console.log(action);
             return [...state]
        case types.USERS:
            console.log(action); 
            return [...state];
       
        default:
            return state
    }
}
export default product;