
import styled, { css } from 'styled-components'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// PROPS
// Standar Props
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'
// Exclusive props text
import exclusivesPropsText from '../../props/exclusives-props-text'

// ==== TYPES ====
const textBase = css` font-size: .9rem; margin: 0px; padding: 0px;`

const Sup = styled.sup`

    /* TEXT BASE */
    ${textBase}

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* STANDAR PROPS */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}

    /* EXCLUSIVES PROPS TEXT */ 
    ${exclusivesPropsText}
    
`

export default Sup
