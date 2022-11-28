
import styled, { css } from 'styled-components'

// Props base
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

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
    ${standarProps}

    /* NC PROPS */
    ${ncProps}

    /* COLORS */
    ${backgroundColor}
    ${color}

`

export default Input
