import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as appreducer} from "./reducer"
import thunk from "redux-thunk"
// const middleware=applyMiddleware(thunk)
const rootreducer=combineReducers({
    appreducer
})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))