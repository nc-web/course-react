
import styled, { css } from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

// PROPS
// Global props
import globalProps from '@components/assets/props/global-props'
// Exclusive props text
import exclusivesPropsText from '@components/assets/props/exclusives-props-text'

// ==== TYPES ====
const textBase = css` font-size: .9rem; margin: 0px; padding: 0px;`

const Rt = styled.rt`

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

export default Rt
