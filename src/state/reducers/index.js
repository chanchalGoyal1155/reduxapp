import { combineReducers } from "redux";
import amountReducers from "./amountReducer";
 
const reducers = combineReducers({
    amount: amountReducers
})
export default reducers;