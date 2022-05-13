import '../styles/cadUsuario.css'

export function CadUsuario() {
    return (
        <>
            <body>
                <section className='cadUsuario'>
                    <div className="area-usuario">
                        <div className="divUsuario">
                            <h1>Cadastro Usuário</h1>
                            <form action="">
                                <input type="text" name='name' placeholder='Insira o nome completo'/>
                                <input type="date" name='date' placeholder='Insira data de nascimento'/>
                                <input type="email" name='login' placeholder='Insira o email'/>
                                <input type="text" name='setor' placeholder='Insira o setor'/>
                                <input type="text" name='supervisor' placeholder='Insira o supervisor'/>
                                <input type="text" name='login' placeholder='Insira o usuario'/>
                                <input type="password" name="password" placeholder="Insira a senha"/>
                                <input type="password" name="password2" placeholder="Confirme a senha"/>
                            </form>
                            <a className='button' href="#">Cadastrar</a>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default CadUsuario;