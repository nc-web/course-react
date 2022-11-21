
import styled, { css } from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Props base
import globalProps from '../assets/props/global-props'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

// ========================= TYPES ============================
const inputBase = css`
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

const InputType1 = css`
    padding: .4rem .7rem;
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

const InputType2 = css`
    padding: .4rem .8rem;
    font-size: .8rem;
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

const InputType3 = css`
    padding: .4rem .9rem;
    font-size: .9rem;
    color: #616161;
    border: solid .031rem #BDBDBD;
    outline: none;
    transition: .8s;
    border-radius: 0.938rem;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`

const InputType4 = css`
    padding: .4rem .7rem;
    font-size: .9rem;
    color: #616161;
    border: none;
    outline: none;
    transition: .8s;
    border-radius: 0.938rem;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`

const InputType5 = css`
    padding: .4rem .7rem;
    font-size: .9rem;
    background-color: none;
    color: #616161;
    border: none;
    outline: none;
    transition: .8s;
    border-radius: 0.938rem;

    ::placeholder {
    color: #BDBDBD;
    font-size: .8rem;
}
`

const Input = styled.input`

    /* FONT */
    ${roboto}

    /* INPUT BASE */
    ${inputBase}

    /* ================== TYPES ================== */
    ${props => props.type1 && css` ${InputType1} `}
    ${props => props.type2 && css` ${InputType2} `}
    ${props => props.type3 && css` ${InputType3} `}
    ${props => props.type4 && css` ${InputType4} `}
    ${props => props.type5 && css` ${InputType5} `}
    /* ================== TYPES ================== */

   
    

    /* PROPS BASE */
    ${globalProps}

    /* COLORS */
    ${colorsBG}
    ${colorsText}

`

export default Input
