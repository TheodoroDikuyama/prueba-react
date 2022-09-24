import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Detalles } from "./components/Detalles/Detalles";
import { Home } from "./components/Home/Home";
import { Productos } from "./components/Productos/Productos";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/productos"} element={<Productos />} />
        <Route path={"/productos/:id"} element={<Detalles />} />
      </Routes>
    </Router>
  );
}

export default App;
