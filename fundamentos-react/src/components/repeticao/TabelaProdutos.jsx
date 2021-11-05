import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default function TabelaProdutos(props){
    function getLinhas(){
        return produtos.map((produto, i) => {
            return(
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(1).replace('.', ',')}</td>
                </tr>
            )
        })  
    }

    return(
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}