import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Form from './Components/Form';
import Success from './Components/Success';
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
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form state={state} setState={setState}/>} />
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
