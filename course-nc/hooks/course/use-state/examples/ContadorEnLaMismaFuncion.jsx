
import React, { Fragment, useState } from 'react'

function ContadorEnLaMismaFuncion () {
  const [contador, setContador] = useState(0)

  const funIncrementar = () => {
    setContador(contador + 1)
  }

  return (
    <>
      <h2> Contador : </h2>
      <h3> {contador} </h3>
      <button onClick={funIncrementar}> Contador + </button>
    </>
  )
}

export default ContadorEnLaMismaFuncion
