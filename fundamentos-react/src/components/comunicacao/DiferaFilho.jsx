import React from "react";

export default function DiretaFilho(props){
    return(
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.gay ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}