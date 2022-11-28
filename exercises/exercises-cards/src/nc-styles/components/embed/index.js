
import styled from 'styled-components'

// Props base
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

const Embed = styled.embed`

    /* PROPS BASE */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}

    /* COLORS */
    ${backgroundColor}
    ${color}
    
`

export default Embed
