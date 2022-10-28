
import Styled from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

// PROPS
// Global props
import globalProps from '@components/assets/props/global-props'
// Props exclusives containers
import exclusivesPropsContainers from '@components/assets/props/exclusives-props-containers'

const Div = Styled.div`

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

export default Div
