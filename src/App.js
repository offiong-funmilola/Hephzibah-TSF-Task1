import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Form from './Components/Form';
import Success from './Components/Success';
import Payment from './Components/Payment';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
