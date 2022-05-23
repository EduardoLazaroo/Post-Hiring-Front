import '../styles/editDocument.css'

export function EditDocument() {
    return (
        <>
            <body>
                <section className='editDocument'>
                    <div className="area-document">
                        <div className="divDocument">
                            <h1>Edição de Documento</h1>
                            <form action="">
                                <input type="text" name='setor' placeholder='Edite o setor'/>
                                <input type="text" name='material' placeholder='Link do Material'/>
                                <textarea name="descricao" className='descricao' placeholder='Insira a descricao'></textarea>
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