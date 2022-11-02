
import styled from 'styled-components'

// Props base
import globalProps from '@components/assets/props/global-props'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

const Iframe = styled.iframe`

    /* PROPS BASE */
    ${globalProps}

    /* COLORS */
    ${colorsBG}
    ${colorsText}
    
`

export default Iframe
