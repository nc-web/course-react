
import styled, { css } from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Props base
import globalProps from '../assets/props/global-props'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

// ================== PROPS EXCLUSIVES ==================
// Table Zebra
const TableVerticalZebra = css` 
    &:nth-child(even), th:nth-child(even) {
    background-color: #F5F5F5;
  }
`

const Td = styled.td`

    /* FONT */
    ${roboto}

    /* Table Zebra */
    ${props => props.tableVerticalZebra && css` ${TableVerticalZebra} `}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}

`

export default Td
