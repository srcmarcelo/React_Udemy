export default function Aleatorio(props){
    const { min, max } = props;
    const num = parseInt(Math.random() * (max - min) + min);
    return(
        <div>
            <h2>Numero Aleatorio</h2>
            <p>
                <strong>Minimo: </strong>{min}
            </p>
            <p>
                <strong>Maximo: </strong>{max}
            </p>
            <p>
                <strong>Numero: </strong>{num}
            </p>
        </div>
    )
}