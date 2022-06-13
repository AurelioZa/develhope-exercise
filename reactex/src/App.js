import React from "react";
import './App.css';
import Jsx01 from "./JSX/Jsx01";
import Jsx02 from "./JSX/Jsx02";
import Jsx05 from "./JSX/Jsx05";
import Clean from "./Components/Components1";
import Appx from "./Components/Components3";
import Hello from "./Components/Components2";
import Hello1 from "./Components/Components6";
import Hello2 from "./Components/Component7/Components7";
import Welcome from "./Props/Props1/Welcome";
import Welcome1 from "./Props/Props2/Welcome";
import Welcome2 from "./Props/Props3/Welcome";
import Welcome3 from "./Props/Props4/Welcome";
import Welcome4 from "./Props/Props5/Welcome";
import Welcome5 from "./ConditionalRendering/ConditionalRendering1/Welcome";
import Welcome6 from "./ConditionalRendering/ConditionalRendering2/Welcome";
import Welcome7 from "./ConditionalRendering/ConditionalRendering3/Welcome";
import Welcome8 from "./ConditionalRendering/ConditionalRendering3/Welcome";
import Welcome9 from "./ConditionalRendering/ConditionalRendering4/Welcome";

const jsxTagStrong = <strong>Nome Proprio</strong>

function App() {

  return (
    <div className="App">
        <Jsx01 />
        <Jsx02 name={"Aurelio"}/>
        <Jsx05 a={5} b={4}/>
        <Clean />
        <Appx />
        <Hello />
        <Hello1 />
        <Hello2 />
        <Welcome name={"Jacopo"} />
        <Welcome1 />
        <Welcome2 name={"Bomba"} age={30}/>
        <Welcome3 name={jsxTagStrong} age={90}/>
        <Welcome4 name={"Una IPA"} age={10}/>
        <Welcome5 name={"Un Negroni"} age={19}/>
        <Welcome6 name={"Uno Spritz"} />
        <Welcome7 name={"Un Anziano"} age={64}/>
        <Welcome8 name={"Joh"} age={64}/>
        <Welcome9 name={"BigData"} age={16}/>
    </div>
  );
}

export default App;
