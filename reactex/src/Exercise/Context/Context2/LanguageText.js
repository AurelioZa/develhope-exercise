import React from "react";
import {LanguageContext} from "../Context1/LanguageContext";

const string = {
    it: {
        LINGUA: "Lingua Italiana"
    },
    en: {
        LINGUA: "English Language"
    }
}

export default function LanguageText(){
    return(
        <LanguageContext.Consumer>
            {
                (language) => {
                    return(
                        <h1>{string[language]}.LINGUA}</h1>
                    )
                }
            }
        </LanguageContext.Consumer>
    )
}