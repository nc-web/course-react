
import React, { Fragment } from 'react'

function ModPropsMismoArchivo (props) {
  const incrementar = () => {
    this.props.like({ like: this.props.like + 1 })
  }

  return (
    <>

      <h2>Me gusta : </h2>
      <h2> {props.like} </h2>

      <button onClick={incrementar}> Me gusta </button>

    </>
  )
}

export default ModPropsMismoArchivo
