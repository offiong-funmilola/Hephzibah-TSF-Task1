import {useState} from 'react';
import Home from './Components/Home';
import Form from './Components/Form';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    amount: ''
  }
  const [state, setState]= useState(initialState);
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form state={state} setState={setState}/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
