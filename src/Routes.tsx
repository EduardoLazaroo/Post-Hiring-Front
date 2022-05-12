import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Perfil } from "./pages/perfil"
import { CadUsuario } from "./pages/cadUsuario"
import { CadDocument } from "./pages/cadDocument"
import { EditDocument } from "./pages/editDocument"

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route element={ <Login/> } path="/"/>
                <Route element={ <Home/> } path="/home"/>
                <Route element={ <Menu/> } path="/menu"/>
                <Route element={ <Perfil/> } path="/perfil"/>
                <Route element={ <CadUsuario/> } path="/cadUsuario"/>
                <Route element={ <CadDocument/> } path="/CadDocument"/>
                <Route element={ <EditDocument/> } path="/EditDocument"/>
            </Routes>
        </Router>
    )
}