import Menu from './menu';
import '../styles/cadDocument.css'

export function CadDocument() {
    return (
        <>
            <body>
                <Menu></Menu>
                <section className='cadDocument'>
                    <div className="area-document">
                        <div className="divDocument">
                            <h1>Cadastro Documento</h1>
                            <form action="">
                                <input type="text" name='stor' placeholder='Insira o setor'/>
                                <input type="text" name='material' placeholder='Link do Material'/>
                                <input className='descricao' type="text" name='documento' placeholder='Descrição do documento'/>
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