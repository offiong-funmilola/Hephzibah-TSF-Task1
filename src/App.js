import Home from './Components/Home';
import {useState} from 'react';



function App() {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    amount: '5000'
  }
  const [state, setState]= useState(initialState);
  return (
      <>
        <Home state={state} setState={setState}/>
      </>
  );
}

export default App;
