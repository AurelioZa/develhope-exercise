import { createStore } from "redux";
import {todoState} from "./todoState";

export const store = createStore(todoState)
