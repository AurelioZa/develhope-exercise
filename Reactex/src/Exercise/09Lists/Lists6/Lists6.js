import React from "react";

export default class TodoList3 extends React.Component{
    state =
        {
            task: [],
            value: ''
        }

    dataInput= (event) =>{
        this.setState(
            {
                value: event.target.value
            }
        )
    }

    handleInput = () =>{
        this.setState(
            (state) =>{

                return {
                    task: state.task.concat(this.state.value),
                    value: state.value=''
                }
            }
        )
}
    handleReset = () =>{
        this.setState(
            (state) =>{
                return {
                    task: [],
                    value: state.value=''
                }
            }
        )
    }

    handleRemoveItem = (i) => {
        this.setState(
            {
                task: this.state.task.filter((e, index) => index !== i)
            }
        )
    }
        render() {
            const list = this.state.task.map((items, index) =>
                <li key={index}>{items}
                    <button type={"button"} onClick={this.handleRemoveItem.bind(this, index)}>X</button>
                </li>)

            return(
                <>
                    <h1>Lists - 6 | To Do List:</h1>
                    <ul>{list}</ul>
                    <input type="text" value={this.state.value} onChange={this.dataInput} />
                    <button onClick={this.handleInput}>Add</button>
                    <button onClick={this.handleReset}>Reset</button>

                </>
            )

        }
}