
import styled, { css } from 'styled-components'

// Props base
import globalProps from '@components/assets/props/global-props'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'

// ========================= SEPARATOR BASE ====================
const SeparatorBase = css`
    height: 1px;
    width: 100%;
    border: none;
    border-radius: 1rem;
`

// ================== PROPS EXCLUSIVES ==================
// ==== WIDTH ====
const Height1 = css` height: .063rem; `
const Height2 = css` height: .125rem; `
const Height3 = css` height: .188rem; `
const Height4 = css` height: .25rem; `
const Height5 = css` height: .313rem; `
const Height6 = css` height: .375rem; `
const Height7 = css` height: .438rem; `
const Height8 = css` height: .5rem; `
const Height9 = css` height: .563rem; `
const Height10 = css` height: .625rem; `

// ================== PROPS EXCLUSIVES ==================

const Hr = styled.hr`

    ${SeparatorBase}

    /* ================== PROPS EXCLUSIVES ================== */
    /* SEPARATOR */    
    ${props => props.height1 && css` ${Height1} `}
    ${props => props.height2 && css` ${Height2} `}
    ${props => props.height3 && css` ${Height3} `}
    ${props => props.height4 && css` ${Height4} `}
    ${props => props.height5 && css` ${Height5} `}
    ${props => props.height6 && css` ${Height6} `}
    ${props => props.height7 && css` ${Height7} `}
    ${props => props.height8 && css` ${Height8} `}
    ${props => props.height9 && css` ${Height9} `}
    ${props => props.height10 && css` ${Height10} `}

    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${globalProps}

    /* COLORS */
    ${colorsBG}

`

export default Hr
