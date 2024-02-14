
import React from 'react'
import {jsPDF} from 'jspdf'

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text('Hello world', 10, 10)
doc.save('hello-world.pdf')

const HelloWorld = () => {
  return (
    <div>
        <h4>Report HelloWorld</h4>
        <small>Automatically generated pdf into folder download </small>
    </div>
  )
}

export default HelloWorld