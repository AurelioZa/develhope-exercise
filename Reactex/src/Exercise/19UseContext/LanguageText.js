import React from "react";
import {LanguageContext} from "../19UseContext/LanguageContext";
import {useContext} from "react";

const string = {
    it: {
        LINGUA: "Lingua Italiana"
    },
    en: {
        LINGUA: "English Language"
    }
}

export default function LanguageText(){
    const language = useContext(LanguageContext)

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