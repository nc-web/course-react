
import { } from 'react'
import Icon from '@mdi/react'

// Components Base
import Div from '@components/div'
import H1 from '@components/h1'
import P from '@components/p'
import Button from '@components/button'

// Icons
import { mdiBackspaceOutline } from '@mdi/js'

const Calculator = () => {
  return (
    <>
      <Div bgGray200 padding='1.5rem' borderRadius='0.5rem' boxShadowBR2>
        <Div bgGray100 paddingX='1rem' paddingY='0.5rem'>
          <Div textRight marginY='0.5rem'>
            <H1 textGray800>0</H1>
          </Div>
          <Div textRight marginY='0.5rem'>
            <P fontSize18 textGray700>0</P>
          </Div>
        </Div>

        <Div displayGrid jcCenter gtCol4 gap8 marginY='1rem'>
          <Button button6>C</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button bgGray600 textWhite>/</Button>

          <Button button6>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button bgGray600 textWhite>x</Button>

          <Button button6>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button bgGray600 textWhite>-</Button>

          <Button button6>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button bgGray600 textWhite>+</Button>

          <Button button6>0</Button>
          <Button>.</Button>
          <Button>
            <Div>
              <Icon src={mdiBackspaceOutline} size={1} color='#A2BD00' />
            </Div>
          </Button>
          <Button bgOrange500>=</Button>
        </Div>
      </Div>
    </>
  )
}

export default Calculator
