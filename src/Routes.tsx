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
    return(
        <Router>
                <Routes>
                    <Route path="*" element={ <Login/> }/>
                    <Route element={<> <Menu/> <Outlet/> </>}>
                        <Route path="/home" element={ <Home/> }/>
                        <Route path="/menu" element={ <Menu/> }/>
                        <Route path="/perfil" element={ <Perfil/> }/>
                        <Route path="/cadUsuario" element={ <CadUsuario/> }/>
                        <Route path="/CadDocument" element={ <CadDocument/> }/>
                        <Route path="/EditDocument" element={ <EditDocument/> }/>
                        <Route path="/CadSetor" element={ <CadSetor/> }/>
                        <Route path="/EditSetor" element={ <EditSetor/> }/>
                    </Route>
                </Routes>
        </Router>
    )
}