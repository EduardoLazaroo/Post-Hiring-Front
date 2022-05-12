import Menu from './menu';
import '../styles/editDocument.css'

export function EditDocument() {
    return (
        <>
            <body>
                <Menu></Menu>
                <section className='editDocument'>
                    <div className="area-document">
                        <div className="divDocument">
                            <h1>Edição de Documento</h1>
                            <form action="">
                                <input type="text" name='stor' placeholder='Edite o setor'/>
                                <input type="text" name='material' placeholder='Link do Material'/>
                                <input className='descricao' type="text" name='documento' placeholder='Edite o documento'/>
                            </form>
                            <a className='button' href="#">Editar</a>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default EditDocument;