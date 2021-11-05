import React from "react";

export default function IndiretaFIlho(props) {
  const cb = props.quandoClicar
  const min = 20
  const max = 70
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + 20
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => cb("Eneas", gerarIdade, true)}>
        Fornecer Informacoes
      </button>
    </div>
  );
}
