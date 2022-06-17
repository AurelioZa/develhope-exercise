import React from "react";


export default class ClickTracker extends React.Component{
    state = {
        name: "",
    }

    handleTracker = (events) => {
        this.setState(() => {
            return{ name: events.target.innerText }
        })
    }

    render() {
        return(
            <>
                <h1>Last Button click: {this.state.name}</h1>
                <button onClick={this.handleTracker}>Click 1</button>
                <button onClick={this.handleTracker}>Click 2</button>
                <button onClick={this.handleTracker}>Click 3</button>
            </>
        )
    }
}