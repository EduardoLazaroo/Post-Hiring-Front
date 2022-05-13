import '../styles/editSetor.css'

export function EditSetor() {
    return (
        <>
            <body>
                <section className='editSetor'>
                    <div className="area-editSetor">
                        <div className="divEditSetor">
                            <h1>Editar Setor</h1>
                            <form action="">
                                <input type="text" name='setor' placeholder='Insira o setor'/>
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