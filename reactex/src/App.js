import React, {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Jsx01 from "./Exercise/01JSX/Jsx01";
import Jsx02 from "./Exercise/01JSX/Jsx02";
import Jsx05 from "./Exercise/01JSX/Jsx05";
import Clean from "./Exercise/02Components/Components1";
import Appx from "./Exercise/02Components/Components3";
import Hello from "./Exercise/02Components/Components2";
import Hello1 from "./Exercise/02Components/Components6";
import Hello2 from "./Exercise/02Components/Component7/Components7";
import Welcome from "./Exercise/03Props/Props1/Welcome";
import Welcome1 from "./Exercise/03Props/Props2/Welcome";
import Welcome2 from "./Exercise/03Props/Props3/Welcome";
import Welcome3 from "./Exercise/03Props/Props4/Welcome";
import Welcome4 from "./Exercise/03Props/Props5/Welcome";
import Welcome5 from "./Exercise/04ConditionalRendering/ConditionalRendering1/Welcome";
import Welcome6 from "./Exercise/04ConditionalRendering/ConditionalRendering2/Welcome";
import Welcome7 from "./Exercise/04ConditionalRendering/ConditionalRendering3/Welcome";
import Welcome8 from "./Exercise/04ConditionalRendering/ConditionalRendering3/Welcome";
import Welcome9 from "./Exercise/04ConditionalRendering/ConditionalRendering4/Welcome";
import {Counter} from "./Exercise/05State/State1";
import {Counter1} from "./Exercise/05State/State3";
import {Counter2} from "./Exercise/05State/State4/State4";
import {Counter3} from "./Exercise/06ComponentLifecycle/ComponentLifecycle1/State4";
import ClickCounter from "./Exercise/07Events/Events1";
import ClickTracker from "./Exercise/07Events/Event3";
import {InteractiveWelcome} from "./Exercise/08Forms/Form1/Forms1";
import {Login} from "./Exercise/08Forms/Form2/Forms2";
import {Login1} from "./Exercise/08Forms/Form3/Forms3";
import {Login2} from "./Exercise/08Forms/Form4/Forms4";
import {UncontrolledLogin} from "./Exercise/08Forms/Form5/Forms5";
import {UncontrolledLogin1} from "./Exercise/08Forms/Form6/Forms6";
import TodoList from "./Exercise/09Lists/Lists3/Lists3";
import TodoList1 from "./Exercise/09Lists/Lists4/Lists4";
import TodoList2 from "./Exercise/09Lists/Lists5/Lists5";
import TodoList3 from "./Exercise/09Lists/Lists6/Lists6";
import WelcomeStyle from "./Exercise/10StylingComponents/StylingComponents1/Welcome";
import {LoginStyle} from "./Exercise/10StylingComponents/StylingComponents3/Forms3";
import Container from "./Exercise/11ComponentComposition/ComponentComposition1/ComponentComposition1";
import Container1 from "./Exercise/11ComponentComposition/ComponentComposition2/ComponentComposition1";
import TodoListRender from "./Exercise/12RenderProps/Lists";
import {Context1} from "./Exercise/13Context/Context1/Context1";
import Sum from "./Exercise/14FunctionComponents/FunctionComponents2/Sum";
import WelcomeFunction from "./Exercise/14FunctionComponents/FunctionComponents1/Welcome";
import Sum1 from "./Exercise/14FunctionComponents/FunctionComponents3/Sum1";
import ClickCounterState from "./Exercise/15UseState/UseState1/useState1";
import LoginState from "./Exercise/15UseState/UseState2/useState2";
import ClickCounterEffect from "./Exercise/16UseEffect/UseEffect1/useEffect1";
import CounterEffect from "./Exercise/16UseEffect/UseEffect2/useEffect2";
import GithubUser from "./Exercise/16UseEffect/UseEffect3/GithubUser";
import HookCounter from "./Exercise/17CustomHooks/CustomHooks1/HookCounter";
import CarDetails from "./Exercise/18UseRef/CarDetails";
import FilteredList from "./Exercise/21UseMemo/FilteredList";
import Root from "./Root";
import ShowGithubUser from "./Exercise/22ReactRouter/ShowGithubUser";
import Error404 from "./Exercise/22ReactRouter/Error404";
import GithubUserList from "./Exercise/16UseEffect/UseEffect4/GithubUserList";
import GithubUserListLink from "./Exercise/22ReactRouter/GithubUserList";
import GithubUserSWR from "./Exercise/23SWR/SWR1/GithubUserSWR";
import GithubUserSWR2 from "./Exercise/23SWR/SWR2/GithubUserSWR2";
import GithubUserSWR3 from "./Exercise/23SWR/SWR3/GithubUserSWR3";




const jsxTagStrong = <strong>Nome Proprio</strong>

Sum1.defaultProps = {
      array: [4,6,5,10,5]
}

function App() {
    {/* useEffect1 */}
    const onCounterChange= (counter) => console.log("Counter value: ", {counter})
    {/* useEffect2 */}
    const [mount, setMount] = useState(true)
    const handleMount = () => { setMount((mount) => !mount)};
    const list = [
        {name: 'Aurelio', age: 38, id: 1},
        {name: 'Adriano', age: 40, id: 2},
        {name: 'Floriana', age: 15, id: 3}
    ]

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
        <TodoListRender render={(items, remove) => <ul>
                  {items.map((items,i) =>(
                      <li key={i}>
                          {items}
                          <button type={"button"} onClick={remove.bind(this, i)}>X</button>
                      </li>))
                  }
              </ul>
        }/>
          {/*<Context1/>*/}
          <WelcomeFunction name={'Aurelio'}/>
          <Sum array={[4,6,5,10,5]} />
          <Sum1 />
          <ClickCounterState />
          <LoginState/>
          <h1>useEffect - 1</h1>
          <ClickCounterEffect onCounterChange={onCounterChange}/>
          <h1>useEffect - 2</h1>
        {/*
        <button onClick={handleMount}>Mount Counter</button>
        {mount && <CounterEffect />}
        <h1>useEffect - 3</h1>
        <GithubUser username={"AurelioZa"} />*/}
        <HookCounter />

        <CarDetails initialData={{model: 'Duster', color: 'Gray', year: 2021, }}/>

        <FilteredList list={list}/>

        <Routes>
            <Route path={"/"} element={<Welcome name={'Aurelio'} />} />
            <Route path={"/counter"} element={<ClickCounterState />} />
            <Route path={"/users/:username"} element={<ShowGithubUser />} />
            <Route path={"users"} element={<GithubUserListLink />}>
                {/*<Route path={":username"} element={<ShowGithubUser/>}/>*/}
                <Route index element={<p>Add a user and select it</p>}/>
                <Route index path={":username"} element={<ShowGithubUser/>}/>
            </Route>

            <Route path={"*"} element={<Error404 />} />
        </Routes>

        <ul>
            <li> <Link to="/">Homepage</Link> </li>
            <li> <Link to="/counter">Counter</Link> </li>
            <li> <Link to="/users/AurelioZa">Users</Link> </li>
        </ul>
        <GithubUserSWR username={"AurelioZa"}/>
        <GithubUserSWR2 username={""}/>
        <GithubUserSWR3 username={"AurelioZa"}/>
    </div>)
}

export default App;
