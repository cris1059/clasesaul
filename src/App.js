import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Layout from "./pages/layout";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*AQUI VA A IR LA RUTA DE MI INICIO*/}
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
