/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./App.css";

import Card from "./components/layout/Card";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#10 - Comunicacao Indireta" color="pink">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09 - Comunicacao Direta" color="brown">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 - Renderizacao Condicional" color="purple">
        <ParOuImpar numero={108324}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Jorge Priquitinha" }} />
        <UsuarioInfo usuario={{ email: "jp.969@gmail.com" }} />
      </Card>
      <Card titulo="#07 - Desafio Produtos" color="black">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 - Repeticao" color="orange">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="blue">
        <Familia sobrenome="Priquitinha">
          <FamiliaMembro nome="Jorge" />
          <FamiliaMembro nome="Florzinha" />
          <FamiliaMembro nome="Marcelo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatorio" color="#080">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parametro">
        <ComParametro titulo="Situacao do aluno" aluno="Jorge" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
