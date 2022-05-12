import Menu from './menu';
import '../styles/perfil.css'

export function Perfil() {
    return (
        <>
            <body className='bodyPerfil'>
                <Menu></Menu>
                <section className='perfil'>
                    <div className="area-perfil">
                        <div className="divPerfil">
                            <h1>Perfil de Usuário</h1>
                            <form action="">
                                <label htmlFor="">Nome Completo</label>
                                <label htmlFor="">Data Nascimento</label>
                                <label htmlFor="">E-mail</label>
                                <label htmlFor="">Setor</label>
                                <label htmlFor="">Supervisor</label>
                            </form>
                        </div>
                    </div>
                </section>
            </body>
            <script></script>
        </>
    )
}

export default Perfil;