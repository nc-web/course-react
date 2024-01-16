
import DefaultProps from "./default-props/DefaultProps"
import Props from "./props/Props"

function App() {

  return (
    <>
      <h3>Deafult Props</h3>
      <h4>Valores por defecto</h4>
      <DefaultProps/>
      <hr/>
      <h4>Volores por defecto modificados</h4>
      <DefaultProps width={120} height={80} color='Blue'/>
      <hr/>
      <h3>Props</h3>
      <Props text='Prop de Texto' x={45} y={38} />
    </>
  )
}

export default App