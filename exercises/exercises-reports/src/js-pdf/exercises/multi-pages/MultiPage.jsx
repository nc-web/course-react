
import React from 'react'
import {jsPDF} from 'jspdf'

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text('MULTI PAGE', 10, 10)
doc.text("Page 1.", 20, 30);
doc.addPage("a6", "l");
doc.text("Page 2", 20, 20);
doc.save('multi-page.pdf')

const MultiPages = () => {
  return (
    <div>
        <h4>Report MultiPage</h4>
        <small>Automatically generated pdf into folder download </small>
    </div>
  )
}

export default MultiPages