import React, {useEffect, useState} from "react";



export default function ClickCounterEffect(props){

    let [counter,setCounter] = useState(0)

    useEffect(() =>{
        props.onCounterChange(counter);
    },[counter, props])

     const handleButtonClick = () => {
            return (setCounter(counter++))
        }

        return(
            <>
                <button onClick={handleButtonClick}>Click Counter: {counter}</button>
            </>
        )

}