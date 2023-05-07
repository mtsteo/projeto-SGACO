import React from "react";
import  DashboardLayout  from './layout/dashboard/DashboardLayout'
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Private from "./contexts/Private";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Private><DashboardLayout/></Private>}></Route>
        <Route path="/dashboard"  element={<DashboardLayout/>}>
            
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
