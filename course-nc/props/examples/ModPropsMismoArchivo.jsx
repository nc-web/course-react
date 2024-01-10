
import React, { Fragment } from 'react'

function ButtonProps (props) {
  return (
    <>
      <h2> Megusta :</h2>
      <h2> {props.numero} </h2>
    </>
  )
}

function ModPropsMismoArchivo () {
  return (
    <>

      <ButtonProps />

    </>
  )
}

export default ModPropsMismoArchivo
