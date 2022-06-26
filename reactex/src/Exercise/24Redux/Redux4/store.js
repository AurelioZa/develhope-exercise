import {combineReducers, createStore} from "redux";
import {todoState} from "./state/todoState";
import {counterState} from "./state/CounterState1";

const rootReducer = combineReducers({
    counter: counterState,
    todo: todoState
})

export const store = createStore(rootReducer)
