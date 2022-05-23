import { useState } from "react";
import "../styles/cadSetor.css";

export function CadSetor() {
  const cadSetorSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("cadSetor: " + cadSetor);
    console.log("cadDescricao " + cadDescricao);
  };
  const [cadSetor, setcadSetor] = useState("");
  const [cadDescricao, setcadDescricao] = useState("");

  return (
    <>
      <body>
        <section className="cadSetor">
          <div className="area-setor">
            <div className="divSetor">
              <h1>Cadastro Setor</h1>
              <form onSubmit={cadSetorSubmit}>
                <input
                  type="text"
                  name="setor"
                  id="setor"
                  placeholder="Insira o setor"
                  onChange={(event) => setcadSetor(event.target.value)}
                />
                <textarea
                  name="descricao"
                  id="descricao"
                  className="descricao"
                  placeholder="Insira a descricao"
                  onChange={(event) => setcadDescricao(event.target.value)}
                ></textarea>
                <input type="submit" className="button" value="Editar" />
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}