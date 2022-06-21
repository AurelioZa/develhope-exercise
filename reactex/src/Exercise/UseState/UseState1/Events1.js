import React, {useState}from "react";



export default function ClickCounterState(){
    const valueStart = 0;

    let [counter,setCounter] = useState(valueStart)


     const handleButtonClick = () => {
            return (setCounter(counter++))
        }

        return(
            <>
                <button onClick={handleButtonClick}>Click Counter: {counter}</button>
            </>
        )

}