
import styled from 'styled-components'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

// Props base
import globalProps from '@components/assets/props/global-props'

const Dialog = styled.dialog`

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}
    
`

export default Dialog
