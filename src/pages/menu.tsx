import '../stylesInterface/menu.css'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";//icon
import { Navigate, useNavigate } from 'react-router-dom';

export function Menu() {
    const navigate = useNavigate()
    const[active, setActive] = useState(false)

    {/* exemplo */}
    var user_adm = sessionStorage.getItem("isSupervisor")



    function logout(){
        navigate('/login')
    }

    return (
        <>
            <nav className="upper-nav">
                <div className='logo'>Post<strong>Hiring</strong>.</div>
                <i>
                    <button onClick={() => setActive(!active)}>
                        <div className='toggle icon-menu'><IoMdMenu style={{ height: 30, width: 30, cursor: "pointer", borderRadius: 10}}/></div>
                    </button>
                </i>
            </nav>
            <aside className={`${!active ? "hidden" : "shown"}`}>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="perfil">Perfil</a></li>
                    {/* exemplo */}
                    <li className={`${!user_adm ? "user-adm-shown" : "user-adm-hidden"}`}><a href="cadUsuario">Cadastro Usuario</a></li>
                    <li className={`${!user_adm ? "user-adm-shown" : "user-adm-hidden"}`}><a href="cadDocument">Cadastro Documento</a></li>
                    <li className={`${!user_adm ? "user-adm-shown" : "user-adm-hidden"}`}><a href="cadSetor">Cadastro Setor</a></li>
                    {/* ----Estes de baixo não vao aparecer------ */}
                    <li><a href="editdocument">(((edtdoc)))</a></li>
                    <li><a href="editsetor">(((edtsetor)))</a></li>
                    <li><div className='divider'></div></li>
                    <li><a className='log' href="#" onClick={logout}>logout</a></li>
                </ul>
            </aside>
        </>
    )
}

export default Menu;