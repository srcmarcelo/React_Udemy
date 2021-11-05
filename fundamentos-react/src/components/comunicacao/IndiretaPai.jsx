import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [gay, setGay] = useState(false);

  function fornecerInformacoes(nome, idade, gay) {
    setNome(nome);
    setIdade(idade);
    setGay(gay);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade} </strong>
        </span>
        <span>{gay ? "Arrasou" : "Hetero top"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
}
