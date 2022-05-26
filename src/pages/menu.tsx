import '../stylesInterface/menu.css'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";//icon

export function Menu() {
    
    const[active, setActive] = useState(false)

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
                    <li><a href="cadUsuario">Cadastro Usuario</a></li>
                    <li><a href="cadDocument">Cadastro Documento</a></li>
                    <li><a href="cadSetor">Cadastro Setor</a></li>
                    {/* ----Estes de baixo não vao aparecer------ */}
                    <li><a href="editdocument">(((edtdoc)))</a></li>
                    <li><a href="editsetor">(((edtsetor)))</a></li>
                    <li><div className='divider'></div></li>
                    <li><a className='log' href="#">logout</a></li>
                </ul>
            </aside>
        </>
    )
}

export default Menu;