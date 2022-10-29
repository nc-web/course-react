
import React, { Fragment } from 'react'

function Eventos () {
  const miprimerevento = () => {
    window.alert(' Este es mi primer evento lanzado ')
  }

  return (
    <>
      <button onClick={miprimerevento}> Lanzador del evento </button>
    </>
  )
}

export default Eventos
