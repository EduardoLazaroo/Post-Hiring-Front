import React, { useState, useContext, useReducer } from "react";
import { AuthContext } from "./auth"

import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate
  } from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Perfil } from "./pages/perfil"
import { CadUsuario } from "./pages/cadUsuario"
import { CadDocument } from "./pages/cadDocument"
import { EditDocument } from "./pages/editDocument"
import { CadSetor } from "./pages/cadSetor"
import { EditSetor } from "./pages/editSetor"

export function AppRoutes() {
    const [ user, setUser ] = useState(null) 

    const login = (email: string, password: string) => { 
        console.log('login auth ', { email, password })
        // setUser({ id: "123", email})
    }

    const logout = () => {
        console.log('logout')
       
    }

    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, login, logout}}> {/* falta o user na segunda camada */}
                <Routes>
                    <Route element={ <Login/> } path="/"/>
                    <Route element={<> <Menu/> <Outlet/> </>}>
                        <Route element={ <Home/> } path="/home"/>
                        <Route element={ <Menu/> } path="/menu"/>
                        <Route element={ <Perfil/> } path="/perfil"/>
                        <Route element={ <CadUsuario/> } path="/cadUsuario"/>
                        <Route element={ <CadDocument/> } path="/CadDocument"/>
                        <Route element={ <EditDocument/> } path="/EditDocument"/>
                        <Route element={ <CadSetor/> } path="/CadSetor"/>
                        <Route element={ <EditSetor/> } path="/EditSetor"/>
                    </Route>
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
}