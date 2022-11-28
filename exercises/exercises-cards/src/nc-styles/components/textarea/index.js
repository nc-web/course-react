
import styled, { css } from 'styled-components'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// PROPS
// Standar Props
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

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

    /* TEXT BASE */
    ${textAreaBase}

    /* ================== TYPES ================== */
    ${props => props.type1 && css` ${textAreaType1} `}
    ${props => props.type2 && css` ${textAreaType2} `}
    ${props => props.type3 && css` ${textAreaType3} `}
    /* ================== TYPES ================== */

    /* COLORS */
    ${backgroundColor}
    ${color}

    /* STANDAR PROPS */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}
    
`

export default Label
