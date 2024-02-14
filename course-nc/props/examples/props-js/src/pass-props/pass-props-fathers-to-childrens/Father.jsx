

import { useState } from "react"

// Children
import FtoCChildren from "./Children"

export default function FtoCFather() {
    
    const [ inputName, setInputName ] = useState('')
    const [ propName, setPropName ] = useState('')
    
    function handleOnChange(e) {
        // e.preventDefault()
        let textInput = e.target.value
        console.log(textInput)
        setInputName(textInput)
    }

    function handleClick() {
        setPropName(inputName)
    }

    return(
        <>
            <h4>Father</h4>
            <input id="inputName" onChange={ e => handleOnChange(e) } type="text" placeholder="Add name to send" />
            <button onClick={ handleClick }>Send prop to children</button>
            <FtoCChildren name={propName}/>
        </>
    )
}