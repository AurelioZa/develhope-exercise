import React, {useEffect, useState} from 'react';

export default function CounterEffect(){

    let [counter, setCounter] = useState(0)
    const intervalCounter = () => setInterval(() => {
        setCounter(counter+1 )
    }, 1000)

        useEffect(() =>{
            console.log('Mounted')
            intervalCounter();

            return () => {
                console.log('Unmounted');
                clearInterval(intervalCounter());
            }
        })

        return(
            <>
               <h1>Counter: {counter}</h1>
            </>
        )
}
