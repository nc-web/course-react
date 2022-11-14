
import styled, { css } from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

// PROPS
// Global props
import globalProps from '../assets/props/global-props'
// Exclusive props text
import exclusivesPropsText from '@components/assets/props/exclusives-props-text'

// ==== TYPES ====
const textBase = css` font-size: .9rem; margin: 0px; padding: 0px;`

const I = styled.i`

    /* FONT */
    ${roboto}

    /* TEXT BASE */
    ${textBase}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* GLOBAL PROPS */
    ${globalProps}

    /* EXCLUSIVES PROPS TEXT */ 
    ${exclusivesPropsText}
    
`

export default I
