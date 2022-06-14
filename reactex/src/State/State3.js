import React from 'react';

export class Counter1 extends React.Component{
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
                <h1>Counter: {this.state.count}</h1>
            </>
        )
    }
}
