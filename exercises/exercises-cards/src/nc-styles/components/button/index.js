
import styled, { css } from 'styled-components'

// Colors
import backgroundColor from '../../colors/background-color'
import color from '../../colors/color'

// PROPS
// Standar Props
import standarProps from '../../props/standar-props'
// NC Props
import ncProps from '../../props/nc-props'

// ========================= BUTTON BASE ============================
const buttonBase = css`
    font-size: .9rem;
    padding: .4rem 1.1rem;
    border-radius: .3rem;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: #BDBDBD;
    color: #424242;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`

// ================== PROPS EXCLUSIVES ==================
// ==== Button circle1 ====
const Button1 = css`
    font-size: .6rem;
    padding: .2rem .9rem .1rem .9rem;
    border: none;
    cursor: pointer;
    background-color: #BDBDBD;
    color: #424242;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle2 ====
const Button2 = css`
    font-size: .7rem;
    padding: .3rem 1rem .1rem 1rem;
    border: none;
    cursor: pointer;
    background-color: #BDBDBD;
    color: #424242;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle3 ====
const Button3 = css`
    font-size: .8rem;
    padding: .3rem 1rem .2rem 1rem;
    border: none;
    cursor: pointer;
    background-color: #BDBDBD;
    color: #424242;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle4 ====
const Button4 = css`
    font-size: .9rem;
    padding: .3rem 1rem .3rem 1rem;
    border: none;
    cursor: pointer;
    background-color: #BDBDBD;
    color: #424242;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle5 ====
const Button5 = css`
    font-size: 1rem;
    padding: .5rem 1.2rem .5rem 1.2rem;
    border: none;
    cursor: pointer;
    background-color: #BDBDBD;
    color: #424242;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`
// ==== Button circle6 ====
const Button6 = css`
    font-size: 1.1rem;
    padding: .7rem 1.4rem .7rem 1.4rem;
    border: none;
    cursor: pointer;
    background-color: #BDBDBD;
    color: #424242;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #03A9F4;
    }
`

// ================== PROPS EXCLUSIVES ==================

const Button = styled.button`

    /* BUTTON BASE */
    ${buttonBase} 

    /* ================== PROPS EXCLUSIVES ================== */
    /* ==== TYPES ==== */
    /* CIRCLE */
    ${props => props.button1 && css` ${Button1} `}
    ${props => props.button2 && css` ${Button2} `}
    ${props => props.button3 && css` ${Button3} `}
    ${props => props.button4 && css` ${Button4} `}
    ${props => props.button5 && css` ${Button5} `}
    ${props => props.button6 && css` ${Button6} `}
    
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${standarProps}

    /* NC PROPS */
    ${ncProps}

    /* COLORS */
    ${backgroundColor}
    ${color}
`

export default Button
