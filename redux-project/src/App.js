import logo from './logo.svg';
import './App.css';
import HomeComponent from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import TicTacMainComponent from './Tic-Tac-Game/pages/TicTacMainComponent';
import {ExampleUseCallbackComponent} from './ReactHooks/useHooksComponent';
import MemoComponentExample from './ReactHooks/MemoComponent';
import React,{useState} from 'react';
import {PortalExampleComponent} from './Component/PortalComponent';
import { createPortal } from 'react-dom';
import {ParentComponent} from './Component/ExampleHOC';
import CustomHookComponent from './Component/CustomHookComponent';
import UseHOC from './Component/ExampleHOC';
import ContextAPI from './Component/ContextAPI'
function App() {
  const [val, setVal] = useState("venkatesh")

  return (
    <div className="App">
      <Provider store={store}>
        {/* {
          createPortal(<PortalExampleComponent />,document.body)
        } */}
        {/* <ParentComponent /> */}
        <CustomHookComponent />
        {/* <UseHOC /> */}
        {/* <ContextAPI /> */}
        {/* <MemoComponentExample /> */}
        {/* <button onClick={() => setVal("karthi")}>Change Name</button> */}
        {/* <ExampleUseCallbackComponent /> */}
        {/* <TicTacMainComponent /> */}
        {/* <HomeComponent /> */}
      </Provider>
        
    </div>
  );
}

export default App;
