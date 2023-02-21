import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import exchangeReducer from "./exchangeReducer";

const masterReducer = combineReducers ({
    default : mainReducer,
    exchange : exchangeReducer    
})


export default masterReducer