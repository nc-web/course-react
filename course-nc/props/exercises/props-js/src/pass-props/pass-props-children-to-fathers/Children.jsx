
import { useState } from 'react'
import CtoFFather from './Father'

export default function CtoFChildren() {
    
    const [inputName, setInputName] = useState('')
    const [propName, setPropName ] = useState('')

    function handleOnChange(e) {     
        let textInput = e.target.value
        console.log(textInput)
        setInputName(textInput)
    } 

    function handleClick() {
        setPropName(inputName)
    }



    return(
        <>
            <h4>Children</h4>
            <input  onChange={ handleOnChange } type="text" placeholder='Add name to send'/>
            <button onClick={ handleClick }>Send prop to Father</button>
            <CtoFFather name={propName}/>
        </>
    )
}