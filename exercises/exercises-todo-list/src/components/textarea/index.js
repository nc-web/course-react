
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
import exclusivesPropsText from '../assets/props/exclusives-props-text'

// ========================= TYPES ============================
const textAreaBase = css`
    padding: .3rem .7rem;
    font-size: .9rem;
    color: #616161;
    border: solid .031rem #BDBDBD;
    outline: none;
    transition: .8s;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`

const textAreaType1 = css`
    padding: .3rem .7rem;
    font-size: .9rem;
    color: #616161;
    border: solid .031rem #BDBDBD;
    outline: none;
    transition: .8s;
    border-radius: 0.313rem;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`

const textAreaType2 = css`
    padding: .3rem .7rem;
    font-size: .9rem;
    color: #616161;
    border: solid .031rem #BDBDBD;
    outline: none;
    transition: .8s;
    border-radius: 0.625rem;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`

const textAreaType3 = css`
    padding: .3rem .7rem;
    font-size: .9rem;
    color: #616161;
    border: solid .031rem #BDBDBD;
    outline: none;
    transition: .8s;
    border-radius: 1.25rem;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}

`

const Label = styled.textarea`

    /* FONT */
    ${roboto}

    /* TEXT BASE */
    ${textAreaBase}

    /* ================== TYPES ================== */
    ${props => props.type1 && css` ${textAreaType1} `}
    ${props => props.type2 && css` ${textAreaType2} `}
    ${props => props.type3 && css` ${textAreaType3} `}
    /* ================== TYPES ================== */

    /* COLORS */
    ${colorsBG}
    ${colorsText}

    /* GLOBAL PROPS */
    ${globalProps}

    /* EXCLUSIVES PROPS TEXT */ 
    ${exclusivesPropsText}
    
`

export default Label
