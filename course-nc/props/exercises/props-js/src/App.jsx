
// PROPS
import DefaultProps from "./default-props/DefaultProps"
import Props from "./props/Props"

// PASS PROPS
// Father to Children
import FtoCFather from "./pass-props/pass-props-fathers-to-childrens/Father"
// Children to Fathers
import CtoFChildren from "./pass-props/pass-props-children-to-fathers/Children"
// Much Components
import Father from './pass-props/pass-props-to-much-components/01Father'


function App() {

  return (
    <>

      <h2>PROPS</h2>
      <Props text='Prop de Texto' x={45} y={38} />

      <hr/>

      <h2>DEFAULT PROPS</h2>
      <h3>Valores por defecto</h3>
      <DefaultProps/>
      
      <br/>
      
      <h3>Volores por defecto modificados</h3>
      <DefaultProps width={120} height={80} color='Blue'/>
      
      <hr />

      <h2>PASS PROPS / FATHER TO CHILDREN </h2>
      <FtoCFather/>

      <hr />

      <h2>PASS PROPS / CHILDREN TO FATHER</h2>
      <CtoFChildren/>
    
      <hr />

      <h2>PASS PROPS / FATHER - CHILDREN - GRANDSON</h2>
      <Father
        nombreF='Alberto'
        apellidoF='Giraldo'
        edadF='70'
      />

    </>
  )
}

export default App