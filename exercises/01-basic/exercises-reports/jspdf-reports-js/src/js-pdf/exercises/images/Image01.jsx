
import React from 'react'
import {jsPDF} from 'jspdf'

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text('IMAGE', 10, 10)
doc.addImage('/img/capitan-america.webp', 'WEBP', 15, 40, 180, 180)
doc.save('image.pdf')

const Images = () => {
  return (
    <div>
        <h4>Report Images</h4>
        <small>Automatically generated pdf into folder download </small>
    </div>
  )
}

export default Images