
import styled from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

// Props base
import globalProps from '@components/assets/props/global-props'

const ColGroup = styled.colgroup`

    /* FONT */
    ${roboto}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* PROPS BASE */
    ${globalProps}

`

export default ColGroup
