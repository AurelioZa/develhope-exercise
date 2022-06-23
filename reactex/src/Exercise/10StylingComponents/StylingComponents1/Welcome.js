import React from "react";


export default class WelcomeStyle extends React.Component{
    render() {
        return (
            <>
                <div className={'welcome'}>
                    <h1>Styling Component - 1</h1>
                    <p >Welcome, {this.props.name}</p>
                </div>
            </>
        )
    }
}