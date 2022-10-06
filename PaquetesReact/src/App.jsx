import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Vistas/Login'
import Register from '../src/Vistas/Register'
import Orders from '../src/Vistas/Orders'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Orders" element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
