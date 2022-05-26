import { useState } from 'react';
import '../styles/editSetor.css'

export function EditSetor() {
  const edtSetorSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("edtSetor: " + edtSetor);
    console.log("edtDescricao " + edtDescricao);
  };

  const [edtSetor, setedtSetor] = useState("");
  const [edtDescricao, setdescricaoSetor] = useState("");

  return (
    <>
      <body>
        <section className='editSetor'>
          <div className="area-editSetor">
            <div className="divEditSetor">
              <h1>Editar Setor</h1>
              <form onSubmit={edtSetorSubmit}>
                <input 
                  type="text" 
                  name='setor'
                  id='setor'
                  onChange={(event)=> setedtSetor(event.target.value)}
                />
                <textarea 
                  name="descricao" 
                  className='descricao'
                  id='descricao' 
                  onChange={(event)=> setdescricaoSetor(event.target.value)}>
                </textarea>
                <input className="button" type="submit" value="Editar" />
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}