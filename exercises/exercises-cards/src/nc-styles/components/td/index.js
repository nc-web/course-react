
import styled, { css } from 'styled-components'

// Props base
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// ================== PROPS EXCLUSIVES ==================
// Table Zebra
const TableVerticalZebra = css` 
    &:nth-child(even), th:nth-child(even) {
    background-color: #F5F5F5;
  }
`

const Td = styled.td`

    /* Table Zebra */
    ${props => props.tableVerticalZebra && css` ${TableVerticalZebra} `}

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* PROPS BASE */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}

`

export default Td
