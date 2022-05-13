import '../styles/cadSetor.css'

export function CadSetor() {
    return (
        <>
            <body>
                <section className='cadSetor'>
                    <div className="area-setor">
                        <div className="divSetor">
                            <h1>Cadastro Documento</h1>
                            <form action="">
                                <input type="text" name='stor' placeholder='Insira o setor'/>
                                <textarea name="descricao" className='descricao' placeholder='Insira a descricao'></textarea>
                            </form>
                            <a className='button' href="#">Cadastrar</a>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}