
import styled from 'styled-components'

export const ButtonBig = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    padding: .7rem;
    transition: .2s;

    &:hover {
        background-color: #64B5F6;
    }
`
