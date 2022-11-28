
import styled from 'styled-components'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// PROPS
// Standar Props
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

const Noscript = styled.noscript`

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* STANDAR PROPS */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}
    
`

export default Noscript
