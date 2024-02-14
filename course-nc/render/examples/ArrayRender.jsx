
import React, { Fragment, useState } from 'react'

const ArrayRender = () => {
  const [seasons, setSeasons] = useState(['Primavera', 'Verano', 'Otoño', 'Invierno'])

  return (
    <>
      RENDERIZADO POR LISTA ARRAY

      <ol>
        {seasons.map((e, index) => <li key={index}> {e} </li>)}
      </ol>

    </>
  )
}

export default ArrayRender
