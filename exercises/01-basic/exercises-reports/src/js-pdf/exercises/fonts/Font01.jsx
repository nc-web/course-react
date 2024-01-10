
import React from 'react'
import {jsPDF} from 'jspdf'

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();


doc.setFontSize(30);
doc.text('REPORT FONTS', 10, 10)

doc.setFontSize(16);
doc.text("Font to 16", 20, 30);

doc.save('report-fonts.pdf')

const Fonts = () => {
  return (
    <div>
        <h4>Report Fonts</h4>
        <small>Automatically generated pdf into folder download </small>
    </div>
  )
}

export default Fonts