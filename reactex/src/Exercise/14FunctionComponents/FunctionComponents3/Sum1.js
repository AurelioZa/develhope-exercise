import React from "react";

export default function Sum1(props){

    return(
        <h1>
            Somma: {
                props.array.reduce((accumulator, currentValue) => {
                    return (accumulator += currentValue);
                })
            }
        </h1>
    )
}