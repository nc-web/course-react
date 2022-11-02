
import Styled from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Props base
import globalProps from '@components/assets/props/global-props'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

const Select = Styled.select`

    /* FONT */
    ${roboto}

    /* PROPS BASE */
    ${globalProps}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

`

export default Select
