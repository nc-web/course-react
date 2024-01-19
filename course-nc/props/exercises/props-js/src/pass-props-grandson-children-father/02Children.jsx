
import Grandson from './03Grandson'

export default function Children(props) {

    return(
        <>
            <h3>Children</h3>
            <p>{props.nombreC}</p>
            <p>{props.apellidoC}</p>
            <p>{props.edadC}</p>
            <Grandson
                nombreG='Marco'
                apellidoG='Giraldo'
                edadG={6}
            />
        </>
        
    )

}