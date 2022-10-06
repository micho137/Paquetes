import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Vistas/Login";
import Register from "../src/Vistas/Register";
import Orders from "../src/Vistas/Orders";
import AddOrder from "./Vistas/AddOrder";
import EditOrder from "./Vistas/EditOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/AddOrder" element={<AddOrder />} />
          <Route path="/EditOrder" element={<EditOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
