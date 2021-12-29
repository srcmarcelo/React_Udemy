import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
  const n = parseInt(num);
  if (n < 0 || isNaN(n)) return -1;
  if (n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [par, setPar] = useState(false);

  useEffect(
    function () {
      setFactorial(calcFactorial(number));
      setPar(number % 2 === 0 ? true : false);
    },
    [number]
  );

  useEffect(
    function () {
      if (factorial > 1000000) document.title = "eita!";
    },
    [factorial]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {factorial === -1 ? "Nao Existe" : factorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{par === true ? "Par" : "Impar"}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
