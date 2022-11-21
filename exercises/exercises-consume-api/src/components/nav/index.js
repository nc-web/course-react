
import Styled from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

// PROPS
// Global props
import globalProps from '../assets/props/global-props'
// Props exclusives containers
import exclusivesPropsContainers from '../assets/props/exclusives-props-containers'

const Nav = Styled.nav`

    /* FONT */
    ${roboto}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}

    /* PROPS EXCLUSIVES - CONTAINERS */
    ${exclusivesPropsContainers}

`

export default Nav
