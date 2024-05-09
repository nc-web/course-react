
import { useEffect, useState } from 'react'

export default function useHello() {

    const [lsHello, setLSHello] = useState('Hola')

    // useEffect(() => {
    //     console.log('Hello')
    // }, [])

    // setLSHello('Hola Hook Hello')

    return lsHello
    // return console.log(lsHello)
    // return <h2>{lsHello}</h2>
}