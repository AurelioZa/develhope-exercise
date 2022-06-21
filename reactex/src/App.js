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
import TodoList from "./Exercise/Lists/Lists3/Lists3";
import TodoList1 from "./Exercise/Lists/Lists4/Lists4";
import TodoList2 from "./Exercise/Lists/Lists5/Lists5";
import TodoList3 from "./Exercise/Lists/Lists6/Lists6";
import WelcomeStyle from "./Exercise/StylingComponents/StylingComponents1/Welcome";
import {LoginStyle} from "./Exercise/StylingComponents/StylingComponents3/Forms3";
import Container from "./Exercise/ComponentComposition/ComponentComposition1/ComponentComposition1";
import Container1 from "./Exercise/ComponentComposition/ComponentComposition2/ComponentComposition1";
import TodoListRender from "./Exercise/RenderProps/Lists";
import {Context1} from "./Exercise/Context/Context1/Context1";
import Sum from "./Exercise/FunctionComponents/FunctionComponents2/Sum";
import WelcomeFunction from "./Exercise/FunctionComponents/FunctionComponents1/Welcome";
import Sum1 from "./Exercise/FunctionComponents/FunctionComponents3/Sum1";
import ClickCounterState from "./Exercise/UseState/UseState1/Events1";
import LoginState from "./Exercise/UseState/UseState2/Forms3";



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
        <TodoList />
        <TodoList1 />
        <TodoList2 />
        <TodoList3 />
        <WelcomeStyle name={"Aurelio"}/>
        <LoginStyle />
        <Container children={<h1>Children Component</h1>} title={<h1>Title Component</h1>}/>
        <Container1 children={<h2>Children Component</h2>} title={<h1>Title Component</h1>}/>
        <TodoListRender render={(items, remove) => (
              <ul>
                  {items.map((items,i) =>(
                      <li key={i}>
                          {items}
                          <button type={"button"} onClick={remove.bind(this, i)}>X</button>
                      </li>))
                  }
              </ul>)
        }/>
          {/*<Context1/>*/}
          <WelcomeFunction name={'Aurelio'}/>
          <Sum array={[4,6,5,10,5]} />
          <Sum1 />
          <ClickCounterState />
          <LoginState/>
    </div>
  );
}

Sum1.defaultProps = {
      array: [4,6,5,10,5]
}
export default App;
