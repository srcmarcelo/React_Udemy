import React from "react";
import DiretaFilho from "./DiferaFilho";

export default function DiretaPai(props){
    return(
        <div>
            <DiretaFilho nome="Bolsonaro" idade={20} gay={true}/>
            <DiretaFilho nome="Wesley Safadao" idade={17} gay={false}/>
        </div>
    )
}