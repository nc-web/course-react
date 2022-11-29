
import styled from 'styled-components'

// Props base
import globalProps from '../assets/props/global-props'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

const Embed = styled.embed`

    /* PROPS BASE */
    ${globalProps}

    /* COLORS */
    ${colorsBG}
    ${colorsText}
    
`

export default Embed