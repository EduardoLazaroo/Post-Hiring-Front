import { useState } from "react";
import api from "../services/api"
import useHistory from 'react-router-dom'
import "../styles/cadSetor.css";
import axios from 'axios'

export function CadSetor() {
  const [Sector_name, setSector_name] = useState('');
  const [Description, setDescription] = useState('');
 
  async function addPost(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const data = {
        sector_name: Sector_name,
        description: Description
      }

      const res = await api.post("/api/sector/insertSector", {data}); 
      
      if (res.data.success){
        const response_sector = res.data.message
        alert(response_sector)  
      } else{
        const response_error = res.data.message
          alert(response_error)
      }   
  }

  return (
    <>
      <section className="cadSetor">
        <div className="area-setor">
          <div className="divSetor">
            <h1>Cadastro Setor</h1>
            <form onSubmit={addPost}>
              <input
                type="text"
                name="setor"
                id="setor"
                placeholder="Insira o setor"
                onChange={(event) => setSector_name(event.target.value)}
              />
              <textarea
                name="descricao"
                id="descricao"
                className="descricao"
                placeholder="Insira a descricao do cadastro de setor"
                onChange={(event) => setDescription(event.target.value)}
              />
              <input type="submit" className="button" value="Cadastrar" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
  }
  export default CadSetor;