
// FUNCION FLECHA
// Arrow Function = Funcion flecha

// Es una forma nueva de hacer compoonentes y salio en la version ES6 - Ecma Script 2015

import React, { Fragment } from 'react'

// SINTAXIS
// Abreviacion: rafc, rafce, rafcp

raf
// Arrow Function con return
// Arrow Function declarada para almacenar un componente de react
const ComponenteArrowFunctions01 = () => {
  return (
    <>
      <h2> Este es un componente Arrow Functions </h2>
      <button> Mi Boton </button>
    </>
  )
}

// Arrow Function sin return
const ComponenteArrowFunctions02 = () => {
  const numero1 = 5
  const numero2 = 10
  let suma

  suma = numero1 + numero2

  console.log(suma)
}

// Arrow Function sin return y los elementos en un contenedor fragment
const ComponenteArrowFunctions03 = () =>
  <>
    <h2> Este es un componente Arrow Functions </h2>
    <h2> Etiqueta 2 </h2>
  </>

// Arrow Function en una sola linea
const ComponenteArrowFunctions04 = () => <h2> Este es un componente Arrow Functions </h2>

export default {
  ComponenteArrowFunctions01,
  ComponenteArrowFunctions02,
  ComponenteArrowFunctions03,
  ComponenteArrowFunctions04
}
