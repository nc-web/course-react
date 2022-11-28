
import styled, { css } from 'styled-components'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// PROPS
// Standar Props
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

// ==== TYPES ====
const textBase = css` font-size: 1.2rem; margin: 0px; padding: 0px;`

const H5 = styled.h5`

    /* TEXT BASE */
    ${textBase}

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* STANDAR PROPS */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}
    
`

export default H5
