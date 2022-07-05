import React from 'react';
import { decrementCounter, incrementCounter, resetCounter} from "./CounterState";
import {store} from "./store";



store.subscribe(() =>{
    console.log(store.getState())
})

store.dispatch(incrementCounter(5))
store.dispatch(decrementCounter(3))
store.dispatch(decrementCounter(6))
store.dispatch(resetCounter())