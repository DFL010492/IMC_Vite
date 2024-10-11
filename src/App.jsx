import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import IMC from "./components/IMC"; // Importando o componente IMC
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página inicial será o Home */}
          <Route path="/login" element={<Login />} /> {/* Rota para Login */}
          <Route path="/imc" element={<IMC />} /> {/* Rota para a Calculadora de IMC */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
