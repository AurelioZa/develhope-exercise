import React from 'react';
import {add, remove, edit, clear} from "./state/todoState"
import {increment, decrement, reset} from "./state/CounterState1"
import {store} from "./store";


store.dispatch(add({ id: 1, title: 'Redux 1', completed: true }));
store.dispatch(increment(2))
store.dispatch(add({ id: 2, title: 'Redux 2', completed: true }));
store.dispatch(increment(2))
store.dispatch(add({ id: 3, title: 'Redux 3', completed: false }));
store.dispatch(decrement(3))
store.dispatch(remove(1));
store.dispatch(reset())