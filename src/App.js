import React from "react";
import LoginPage from "./pages/loginPage/LoginPage";
import Home from "./pages/home/Home";
import Private from "./contexts/Private";
import { Routes, Route } from "react-router-dom"
import { AuthLayout } from "./layout/auth/AuthLayout";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/" element={<LoginPage/>}>
            <Route path="/home" element={<Home/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
