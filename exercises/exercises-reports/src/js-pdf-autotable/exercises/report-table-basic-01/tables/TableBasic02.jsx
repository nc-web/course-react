
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
            dody:databasic01
        })
        doc.save('table.pdf')
    }

    // Handle ID
    const handleID = (id) => {
        setCylinderID(id)
    }

    return (
        <>
            <table bgWhite padding10 borderRadiusBL2 borderRadiusBR2>
                <caption textWhite bgGray700 borderRadiusTL2 borderRadiusTR2 padding5> TABLE BASIC </caption>
                <thead bgGray600>
                    <tr textWhite>
                        <th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <p fontSize7> ID </p> </th>
                        <th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <p fontSize7> Nombre </p> </th>
                        <th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <p fontSize7> Apellido </p> </th>
                        <th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <p fontSize7> Edad </p>  </th>
                        <th paddingX10 paddingY2 borderRadiusTL1 borderRadiusTR1> <p fontSize7> Email </p>  </th>
                    </tr>
                </thead>

                <tbody >
                    <tr>
                        <td textCenter paddingX5> <p fontSize7 textGray700> 46811 </p> </td>
                        <td paddingX5> <p fontSize7 textGray700> Alejandra </p> </td>
                        <td paddingX5> <p fontSize7 textGray700> Gomez Parra </p> </td>
                        <td textCenter> <p fontSize7 textGray700> 33 </p> </td>
                        <td paddingX5> <p fontSize7 textGray700> maleja8801@gmail.com  </p> </td>
                        <button button1 onClick={() => downloadPdf()} bgColorBlue500>
                            <Icon path={mdiEye} title="Ver Producto" size={0.6} color="#FFFFFF" />
                        </button>
                    </tr>
               </tbody>
            </table>
        </>
    )
}

export default TableBasic01
