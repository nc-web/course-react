
import styled from 'styled-components'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

// PROPS
// Global props
import globalProps from '@components/assets/props/global-props'
// Exclusive props text
import exclusivesPropsText from '@components/assets/props/exclusives-props-text'

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
