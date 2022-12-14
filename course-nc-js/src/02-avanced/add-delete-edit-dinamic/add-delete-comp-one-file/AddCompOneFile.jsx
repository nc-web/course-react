
import React, { Fragment, useState } from 'react'

// COMPONENTE A AGREGAR
const Componente = ({ componentes }) => {
  return componentes.map(() => (
    <>
      <h4> Componente prueba </h4>
    </>
  ))
}

// BOTONES QUE GENERAN LA ACCION DE AGREGAR EL COMPONENTE
const Buttons = (props) => {
  const handleSubmit = e => {
    e.preventDefault()
    props.onSubmit()
    console.log('Accion realizada: Ok')
  }

  return (
    <>
      <button onClick={handleSubmit}> Agregar componente </button>
    </>
  )
}

// COMPONENTE CONTENEDOR
function AddCompOneFile () {
  const [componentes, setComponentes] = useState([])

  const addComponents = e => {
    const newComponentes = [e, ...componentes]
    setComponentes(newComponentes)
    // console.log(e, ...componentes);
  }

  return (
    <div>
      <h3> EJERCICIO ADD COMPONENTES DINAMICAMENTE </h3>
      <Buttons onSubmit={addComponents} />
      <Componente componentes={componentes} />
    </div>
  )
}

export default AddCompOneFile
