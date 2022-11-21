
import styled from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Props base
import globalProps from '../assets/props/global-props'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

const TFoot = styled.tfoot`

    /* FONT */
    ${roboto}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}

`

export default TFoot
