import React from "react";
import {LanguageContext} from "./LanguageContext";
import {DisplayLanguage} from "../Context1/DisplayLanguage";
import LanguageText from "./LanguageText";




export class Context2 extends React.Component{

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
                        <LanguageText/>
                    </DisplayLanguage>
                </LanguageContext.Provider>
            </div>
        )
    }
}