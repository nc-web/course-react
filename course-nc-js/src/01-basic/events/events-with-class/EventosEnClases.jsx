
import React, { Component, Fragment } from 'react'

class EventosEnClases extends Component {
  render () {
    const reaccion = () => {
      window.alert(' Me encanta ')
    }

    return (
      <>
        <button onClick={reaccion}> Lanzador de eventos </button>
      </>
    )
  }
}

export default EventosEnClases
