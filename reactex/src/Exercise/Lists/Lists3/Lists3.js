import React from "react";


export default class TodoList extends React.Component{
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
                }
            }
        )
}

        render() {
            const list = this.state.task.map((items, index) => <li key={items + index}>{items}</li>)

            return(
                <>
                    <h1>Lists - 3 | To Do List:</h1>
                    <ul>{list}</ul>
                    <input type="text" value={this.state.value} onChange={this.dataInput} />
                    <button onClick={this.handleInput}>Add</button>

                </>
            )

        }
}