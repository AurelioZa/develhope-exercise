import React from "react";

export default class TodoListRender extends React.Component{
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
            return(
                <>
                    <h1>Render Props - 1 | To Do List:</h1>
                    {this.props.render(this.state.task, this.handleRemoveItem)}
                    <input type="text" value={this.state.value} onChange={this.dataInput} />
                    <button onClick={this.handleInput}>Add</button>
                    <button onClick={this.handleReset}>Reset</button>

                </>
            )

        }
}