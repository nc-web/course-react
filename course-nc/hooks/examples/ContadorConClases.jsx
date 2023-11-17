
import React, { Fragment, Component } from 'react'

class ContadorConClases extends Component {
  state = {
    contador: 0
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render () {
    return (
      <>
        <h2> Contador con Clases : </h2>
        <h3> {this.state.contador} </h3>
        <button onClick={this.incrementar}> Incrementar </button>
      </>
    )
  }
}

export default ContadorConClases
