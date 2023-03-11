
import React from 'react'
import { Div, H4, Table, Thead, Tbody, Tr, Td, Th, Button, P, Caption } from 'nc-styles-react'
import Styled from 'styled-components'
import Icon from '@mdi/react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

// Icons
import { mdiDownload, mdiTable, mdiPencil, mdiEye, mdiArrowLeftDropCircle, mdiArrowRightDropCircle } from '@mdi/js'

// Tables
import TableBasic01 from './tables/TableBasic01'

const TrZebra = Styled(Tr)`

    &:nth-child(even) {
        background-color: #E3F2FD;
    }

`

// const downloadPdf = () => {
//   const doc = new jsPDF()
//   doc.text('detalles', 20, 10)
//   doc.autoTable({
//       theme: 'grid',
//       head: [['Name', 'Email', 'Country']],
//   })
//   doc.save('report-table-basic-01.pdf')
// }

const handleReportPDF = () => {
  const doc = new jsPDF()
  doc.autoTable({
    theme: 'grid',
    head: [['ID', 'Nombre', 'Apellido', 'Edad', 'Email']],
    body: [
      ['46811','Alejandra', 'Gomez', '33', 'maleja@example.com'],
      ['46812', 'Andres', 'Giraldo', '15', 'andres@example.com'],
    ],
    })
  doc.save('report-table-basic-01.pdf')
}


function ReportTableBasic01() {
  return (
    <>
      <Div padding='2rem'>
        <Div>
          <H4 textCenter colorGray800>REPORT TABLE BASIC 01</H4>
          <Div displayFlex justifyContent='end'>
            <Button bgColorGray600 onClick={handleReportPDF}>
                <Icon path={mdiDownload} title="Descargar PDF" size={.8} color="#FFFFFF" />
            </Button>
          </Div>
        </Div>
        <Div displayGrid jcCenter>
          <Table bgWhite padding10 borderRadiusBL2 borderRadiusBR2>
                    <Caption colorBlue800 borderRadiusTL2 borderRadiusTR2 padding5> TABLE BASIC </Caption>
                    <Thead bgGray600>
                        <Tr textWhite>
                            <Th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <P fontSize7> ID </P> </Th>
                            <Th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <P fontSize7> Nombre </P> </Th>
                            <Th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <P fontSize7> Apellido </P> </Th>
                            <Th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <P fontSize7> Edad </P>  </Th>
                            <Th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <P fontSize7> Email </P>  </Th>
                        </Tr>
                    </Thead>

                    <Tr /> <Tr /> <Tr />

                    <Tbody >
                        <TrZebra>
                            <Td textCenter paddingX5> <P fontSize7 textGray700> 46811 </P> </Td>
                            <Td paddingX5> <P fontSize7 textGray700> Alejandra </P> </Td>
                            <Td paddingX5> <P fontSize7 textGray700> Gomez Parra </P> </Td>
                            <Td textCenter> <P fontSize7 textGray700> 33 </P> </Td>
                            <Td paddingX5> <P fontSize7 textGray700> maleja8801@gmail.com  </P> </Td>
                            <Button button1 bgColorBlue500>
                                <Icon path={mdiEye} title="Ver Producto" size={0.6} color="#FFFFFF" />
                            </Button>
                        </TrZebra>
                  </Tbody>
          </Table>
        </Div>
      </Div>
    </>
  )
}

export default ReportTableBasic01