
import styled from 'styled-components'

// Props base
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

const Progress = styled.progress`

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* PROPS BASE */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}
    
`

export default Progress