
import styled from 'styled-components'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

// PROPS
// Global props
import globalProps from '../assets/props/global-props'
// Exclusive props text
import exclusivesPropsText from '../assets/props/exclusives-props-text'

const Noscript = styled.noscript`

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* GLOBAL PROPS */
    ${globalProps}

    /* EXCLUSIVES PROPS TEXT */ 
    ${exclusivesPropsText}
    
`

export default Noscript
