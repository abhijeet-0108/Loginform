import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Forgetpass from './Component/Forgetpass';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/setpassword' element={<Forgetpass/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
