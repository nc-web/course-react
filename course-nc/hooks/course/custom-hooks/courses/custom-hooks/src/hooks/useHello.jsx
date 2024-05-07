
import { useEffect, useState } from 'react'

export default function useHello() {

    const [lsHello, setLSHello] = useState('Hola')

    // useEffect(() => {
    //     console.log('Hello')
    // }, [])

    // setLSHello('Hola Hook Hello')

    return console.log(lsHello)
}