import React from "react";



export default class ClickCounter extends React.Component{
    state = {
        count: 0,
    }

     handleButtonClick = () => {
        this.setState((state) => {
            return{ count: state.count + 1 }
        })
    }

    render() {
        return(
            <>
                <button onClick={this.handleButtonClick}>Click Counter: {this.state.count}</button>
            </>
        )
    }
}