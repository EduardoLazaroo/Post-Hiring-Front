import '../stylesInterface/menu.css'
import imgMenu from '../assets/menu.png';
import imgClose from '../assets/close.png';
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export function Menu() {
    return (
        <>
            <section className='menu'>
                <header id='header'>
                    <nav className='container'>
                        <a className="name" href="/home">Post<strong>Hiring</strong>.</a>
                        <div className='divMenu'>
                            <ul>
                                <li><a href="home">Home</a></li>
                                <li><a href="perfil">Perfil</a></li>
                                <li><a href="cadUsuario">Cad Usuario</a></li>
                                <li><a href="cadDocument">Cad Documento</a></li>
                                <li><a href="cadSetor">Cad Setor</a></li>
                                <li><a href="editSetor">Edit Setor</a></li>
                            </ul>
                        </div>{/* menu acaba */}

                        <div className='toggle icon-menu'><IoMdMenu style={{color: 'white', height: 32, width: 32, cursor: "pointer"}}/></div>
                        {/* <div className='toggle icon-close'><IoIosCloseCircleOutline style={{color: 'white', height: 32, width: 32, cursor: "pointer", visibility: "hidden"}}/> </div> */}
                    </nav>
                </header>
            </section>
        </>
    )
}

export default Menu;