
import styled from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Props base
import globalProps from '@components/assets/props/global-props'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

const TBody = styled.tbody`

    /* FONT */
    ${roboto}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}

`

export default TBody
