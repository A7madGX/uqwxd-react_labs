import {combineReducers} from 'redux'

const initialState = {
    Increments: 0,
    Decrements: 0
}

const counterInc = (state=initialState.Increments ,action)=>{
    if(action.type === 'INCREMENT') {
        //This will increase the value of counter by the value passed to the increment method
        return state + action.inc;
    }
    //Returns the current value of the counter
    return state;
}
const counterDec = (state=initialState.Decrements ,action)=>{
    if(action.type === 'DECREMENT') {
        //This will increase the value of counter by the value passed to the increment method
        return state - action.dec;
    }
    //Returns the current value of the counter
    return state;
}

const myReducers = combineReducers({
    Increments: counterInc,
    Decrements: counterDec
});

export default myReducers;