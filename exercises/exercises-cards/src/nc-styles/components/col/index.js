
import styled from 'styled-components'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// Props base
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

const Col = styled.col`

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* PROPS BASE */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}

`

export default Col