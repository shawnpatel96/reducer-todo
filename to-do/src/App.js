import React, { useReducer } from 'react';

import './App.css';
import { reducer, initialState } from './reducers/reducer';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [state, dispatch]= useReducer(reducer, initialState);

  return (
    <div className="App">
      <header> Chores List:</header>
      {/* Form Component Here */}
      <Form dispatch={dispatch}/>

      {/* List Component with state here */}
     <List state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
