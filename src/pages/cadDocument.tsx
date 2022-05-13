import '../styles/cadDocument.css'

export function CadDocument() {
    return (
        <>
            <body>
                <section className='cadDocument'>
                    <div className="area-document">
                        <div className="divDocument">
                            <h1>Cadastro Documento</h1>
                            <form action="">
                                <input type="text" name='stor' placeholder='Insira o setor'/>
                                <input type="text" name='material' placeholder='Link do Material'/>
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

export default CadDocument;