
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
const TableHorizontalZebra = css` 
    &:nth-child(even) {
    background-color: #F5F5F5;
} `

const Tr = styled.tr`

    /* FONT */
    ${roboto}

    /* Table Zebra */
    ${props => props.tableHorizontalZebra && css` ${TableHorizontalZebra} `}
    
    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}

`

export default Tr
