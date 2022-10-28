
import styled, { css } from 'styled-components'

// Props base
import globalProps from '@components/assets/props/global-props'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'

// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
// Type base
const typeBase = css`
    border-radius: .1rem;
`
// Type round
const typeRound = css`
    border-radius: .4rem;
    transition: .2s;
`
// Type circle
const typeCircle = css`
    border-radius: 50%;
    transition: .2s;
`

// ==== SIZE ====
const sizeXS = css` width: 1.563rem; height: 1.563rem; padding: .3rem; `
const sizeS = css` width: 1.875rem; height: 1.875rem; padding: .4rem; `
const sizeM = css` width: 2.5rem; height: 2.5rem; padding: .5rem; `
const sizeL = css` width: 3.75rem; height: 3.75rem; padding: .6rem; `
const sizeXL = css` width: 5rem; height: 5rem; padding: .7rem; `
const sizeXXL = css` width: 6.25rem; height: 6.25rem; padding: .8rem; `

// ================== PROPS EXCLUSIVES ==================

const Img = styled.img`

    /* IMAGE BASE */
    ${typeBase} 


    /* ================== PROPS EXCLUSIVES ================== */
    /* TYPE */
    ${props => props.round && css` ${typeRound} `}
    ${props => props.circle && css` ${typeCircle} `}
    
    /* SIZE */
    ${props => props.sizeXS && css` ${sizeXS} `}
    ${props => props.sizeS && css` ${sizeS} `}
    ${props => props.sizeM && css` ${sizeM} `}
    ${props => props.sizeL && css` ${sizeL} `}
    ${props => props.sizeXL && css` ${sizeXL} `}
    ${props => props.sizeXXL && css` ${sizeXXL} `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${globalProps}

    /* COLORS */
    ${colorsBG}
    ${colorsText}
    
`

export default Img
