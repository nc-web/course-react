
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

// ==== TYPE ====
const textBase = css` font-size: .9rem; margin: 0px; padding: 0px;`

const Abbr = styled.abbr`

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

export default Abbr
