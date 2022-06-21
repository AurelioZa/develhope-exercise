import React from "react";
import {LanguageContext} from "./LanguageContext";
import {DisplayLanguage} from "./DisplayLanguage";



export class Context1 extends React.Component{

        state = {
            language: 'en'
        }

    handleLanguageChange= (event) => {
        this.setState( (state) =>{
            return {
                language: state.language = event.target.value
            }}
        )
    }

        render() {
            return(
                <div>
                    <select value={this.value.language} onChange={this.handleLanguageChange}>
                        <option value="en">
                            English
                        </option>
                        <option value="it">
                            Italian
                        </option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        <DisplayLanguage>
                        </DisplayLanguage>
                    </LanguageContext.Provider>
                </div>
            )
        }
}