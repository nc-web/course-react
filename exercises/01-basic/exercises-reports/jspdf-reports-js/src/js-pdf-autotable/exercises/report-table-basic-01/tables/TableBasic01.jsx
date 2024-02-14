
import { useState} from 'react'
import { Table, Thead, Tbody, Tr, Td, Th, Button, P, Caption } from 'nc-styles-react'
import Styled from 'styled-components'
import Icon from '@mdi/react'

// Icons
import { mdiTable, mdiPencil, mdiEye, mdiArrowLeftDropCircle, mdiArrowRightDropCircle } from '@mdi/js'

const TrZebra = Styled(Tr)`

    &:nth-child(even) {
        background-color: #E3F2FD;
    }

`

const TableBasic01 = () => {

    // States Locales
    const [cylinderID, setCylinderID] = useState('')
    
    const downloadPdf = () => {
        const doc = new jsPDF()
        doc.text('detalles', 20, 10)
        doc.autoTable({
            theme: 'grid',
            columns:Columns.map(col=>({...col,datakey:col.field})),
            body:databasic01
        })
        doc.save('table.pdf')
    }

    // Handle ID
    const handleID = (id) => {
        setCylinderID(id)
    }

    return (
        <>
            <Table bgWhite padding10 borderRadiusBL2 borderRadiusBR2>
                <Caption textWhite bgGray700 borderRadiusTL2 borderRadiusTR2 padding5> TABLE BASIC </Caption>
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
                        <Button button1 onClick={() => downloadPdf()} bgColorBlue500>
                            <Icon path={mdiEye} title="Ver Producto" size={0.6} color="#FFFFFF" />
                        </Button>
                    </TrZebra>
               </Tbody>
            </Table>
        </>
    )
}

export default TableBasic01
