import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
  let nome = "?";
  let idade = 0;
  let gay = false;

  function fornecerInformacoes(nomeParam, idadeParam, gayParam) {
    nome = nomeParam;
    idade = idadeParam;
    gay = gayParam;
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
