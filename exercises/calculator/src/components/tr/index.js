
import styled, { css } from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Props base
import globalProps from '@components/assets/props/global-props'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

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
