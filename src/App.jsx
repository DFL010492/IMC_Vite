import './App.css'
import IMC from './components/IMC'
import Login from './components/Login';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Login" element={<Login />}
          <Route path="IMC" element={<IMC />}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
