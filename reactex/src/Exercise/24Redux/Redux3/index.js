import React from 'react';
import {add, remove, edit, clear} from "./todoState"
import {store} from "./store";


store.dispatch(add({ id: 1, title: 'Redux 1', completed: true }));
store.dispatch(add({ id: 2, title: 'Redux 2', completed: true }));
store.dispatch(add({ id: 3, title: 'Redux 3', completed: false }));
store.dispatch(remove(1));