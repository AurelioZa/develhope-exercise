import React from 'react';
import CounterDisplay from "./CounterDisplay";

export class Counter2 extends React.Component{
    state = {
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props);

        setInterval(() => {
            this.setState((state) =>{
                return{ count: state.count + 1 }
            })
        }, 1000)
    }

    render() {
        return(
            <>
                <CounterDisplay counter={this.state.count}/>
            </>
        )
    }
}
