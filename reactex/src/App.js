import React from "react";
import './App.css';
import Jsx01 from "./Exercise/JSX/Jsx01";
import Jsx02 from "./Exercise/JSX/Jsx02";
import Jsx05 from "./Exercise/JSX/Jsx05";
import Clean from "./Exercise/Components/Components1";
import Appx from "./Exercise/Components/Components3";
import Hello from "./Exercise/Components/Components2";
import Hello1 from "./Exercise/Components/Components6";
import Hello2 from "./Exercise/Components/Component7/Components7";
import Welcome from "./Exercise/Props/Props1/Welcome";
import Welcome1 from "./Exercise/Props/Props2/Welcome";
import Welcome2 from "./Exercise/Props/Props3/Welcome";
import Welcome3 from "./Exercise/Props/Props4/Welcome";
import Welcome4 from "./Exercise/Props/Props5/Welcome";
import Welcome5 from "./Exercise/ConditionalRendering/ConditionalRendering1/Welcome";
import Welcome6 from "./Exercise/ConditionalRendering/ConditionalRendering2/Welcome";
import Welcome7 from "./Exercise/ConditionalRendering/ConditionalRendering3/Welcome";
import Welcome8 from "./Exercise/ConditionalRendering/ConditionalRendering3/Welcome";
import Welcome9 from "./Exercise/ConditionalRendering/ConditionalRendering4/Welcome";
import {Counter} from "./Exercise/State/State1";
import {Counter1} from "./Exercise/State/State3";
import {Counter2} from "./Exercise/State/State4/State4";
import {Counter3} from "./Exercise/ComponentLifecycle/ComponentLifecycle1/State4";
import ClickCounter from "./Exercise/Events/Events1";
import ClickTracker from "./Exercise/Events/Event3";
import {InteractiveWelcome} from "./Exercise/Forms/Form1/Forms1";
import {Login} from "./Exercise/Forms/Form2/Forms2";
import {Login1} from "./Exercise/Forms/Form3/Forms3";
import {Login2} from "./Exercise/Forms/Form4/Forms4";
import {UncontrolledLogin} from "./Exercise/Forms/Form5/Forms5";
import {UncontrolledLogin1} from "./Exercise/Forms/Form6/Forms6";


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
        <Counter />
        <Counter1 initialValue={10}/>
        <Counter2 initialValue={50}/>
        <Counter3 initialValue={5}/>
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login/>
        <Login1/>
        <Login2/>
        <UncontrolledLogin/>
        <UncontrolledLogin1/>

    </div>
  );
}

export default App;
