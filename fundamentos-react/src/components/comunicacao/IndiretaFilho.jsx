import React from "react";

export default function IndiretaFIlho(props) {
  const cb = props.quandoClicar
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => cb("Eneas", 102, true)}>
        Fornecer Informacoes
      </button>
    </div>
  );
}
