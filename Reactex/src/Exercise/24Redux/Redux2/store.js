import { createStore } from "redux";
import { counterReducer, decrementCounter, incrementCounter, resetCounter} from "../Redux1/CounterState";

export const store = createStore(counterReducer)