
import { useState, useEffect, useRef } from 'react'
import Icon from '@mdi/react'

// Components Base
import Div from '@components/div'
import H1 from '@components/h1'
import P from '@components/p'
import Button from '@components/button'

// Icons
import { mdiBackspaceOutline } from '@mdi/js'

const Calculator = () => {
  const refDisplay1 = useRef(0)

  // Local States
  const [stateDisplay1, setStateDisplay1] = useState('0')
  const [stateDisplay2, setStateDisplay2] = useState('0')
  const [stateCurrent, setStateCurrent] = useState('')

  useEffect(() => {
    setStateDisplay2(stateCurrent)
    // setStateDisplay1(stateCurrent)
  }, [stateCurrent])

  useEffect(() => {
    setStateDisplay2(stateDisplay2)
  }, [stateDisplay2])
  
  const handleButtons = (e) => {
    setStateCurrent(stateCurrent.concat(e.target.name))
  }

  const handleClear = (e) => {
    setStateCurrent('')
  }

  const handleBackspace = (e) => {
    setStateCurrent(stateCurrent.slice(0, stateCurrent.length - 1))
  }

  const handleCalculate = (e) => {
    setStateDisplay1(eval(stateCurrent).toString())
    // setStateDisplay2('')
    // setStateCurrent('0')
  }

  return (
    <>
      <Div bgGray200 padding='1.5rem' borderRadius='0.5rem' boxShadowBR2>
        <Div bgGray100 paddingX='1rem' paddingY='0.5rem'>
          <Div textRight marginY='0.5rem'>
            <H1 ref={refDisplay1} textGray800>{stateDisplay1}</H1>
          </Div>
          <Div textRight marginY='0.5rem'>
            <P fontSize='18px' textGray700>{stateDisplay2}</P>
          </Div>
        </Div>

        <Div displayGrid jcCenter gtCol4 gap='.4rem' marginY='1rem'>
          <Button name='C' id='clear' onClick={handleClear} button6>C</Button>
          <Button name='Error' onClick={handleButtons}>+/-</Button>
          <Button name='%' onClick={handleButtons}>%</Button>
          <Button name='/' onClick={handleButtons} bgGray600 textWhite>/</Button>

          <Button name='1' onClick={handleButtons} button6>1</Button>
          <Button name='2' onClick={handleButtons}>2</Button>
          <Button name='3' onClick={handleButtons}>3</Button>
          <Button name='*' onClick={handleButtons} bgGray600 textWhite>x</Button>

          <Button name='4' onClick={handleButtons} button6>4</Button>
          <Button name='5' onClick={handleButtons}>5</Button>
          <Button name='6' onClick={handleButtons}>6</Button>
          <Button name='-' onClick={handleButtons} bgGray600 textWhite>-</Button>

          <Button name='7' onClick={handleButtons} button6>7</Button>
          <Button name='8' onClick={handleButtons}>8</Button>
          <Button name='9' onClick={handleButtons}>9</Button>
          <Button name='+' onClick={handleButtons} bgGray600 textWhite>+</Button>

          <Button name='0' onClick={handleButtons} button6>0</Button>
          <Button name='.' onClick={handleButtons}>.</Button>
          <Button id='backspace' onClick={handleBackspace}>
            <Div>
              <Icon path={mdiBackspaceOutline} size={0.7} color='#757575' />
            </Div>
          </Button>
          <Button onClick={handleCalculate} bgOrange500>=</Button>
        </Div>
      </Div>
    </>
  )
}

export default Calculator
