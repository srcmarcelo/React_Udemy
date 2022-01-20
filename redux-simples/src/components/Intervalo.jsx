import React from "react";
import "./Intervalo.css";

import Card from "./Card";

export default function Intervalo(props) {
  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Minimo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
}
