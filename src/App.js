import React from "react";
import DashboardLayout from './layout/dashboard/DashboardLayout'
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import LancarVagas from "./pages/lancarVagas/LancarVagas";
import ConsultasAgendadas from "./pages/consultasAgendads/ConsultasAgendadas";
import Private from "./contexts/Private";
import { Routes, Route } from "react-router-dom"
import Relatorios from "./pages/relatorios/Relatorios";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Private><DashboardLayout /></Private>}>
          <Route path="/inicio"  element={<Home/>}/>
          <Route path="/cadastro" exate element={<Cadastro />} />
          <Route path="/consultasAgendadas" exate element={<ConsultasAgendadas />} />
          <Route path="/lancarVagas" exate element={<LancarVagas />} />
          <Route path="/relatorios" exate element={<Relatorios />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
