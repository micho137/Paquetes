import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Monda</div>} />
        <Route path="/Login" element={<div>Monda2</div>} />
      </Routes>
    </BrowserRouter>
  );
}
