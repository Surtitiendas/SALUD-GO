import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ListaMedicos from "./Pages/ListaMedicos";
import Citas from "./Pages/Citas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicos" element={<ListaMedicos />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
