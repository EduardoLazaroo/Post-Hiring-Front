import '../stylesInterface/menu.css'
import imgMenu from '../assets/menu.png';
import imgClose from '../assets/close.png';

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

                        <div className='toggle icon-menu'><img src={imgMenu} /></div>
                        <div className='toggle icon-close'><img src={imgClose} /></div>
                        
                    </nav>
                </header>
            </section>
        </>
    )
}

export default Menu;