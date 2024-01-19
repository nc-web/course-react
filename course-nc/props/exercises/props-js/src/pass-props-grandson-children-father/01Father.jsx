
import Children from "./02Children";

export default function Father(props) {
    return(
        <>
            <h3>Father</h3>
            <p>{props.nombreF}</p>
            <p>{props.apellidoF}</p>
            <p>{props.edadF}</p>
            <Children
                nombreC='Andres'
                apellidoC='Giraldo'
                edadC={43}
            />
        </>
    )
}

