import React from "react";
import {useCounter} from "./useCounter";

export default function HookCounter(){
    const { counter, onIncrement, onDecrement, onReset} = useCounter()

    return(
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}