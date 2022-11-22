
import {} from 'react'
import styled from 'styled-components'

// Componens
import { ButtonBigGreen, ButtonBigRed } from './components/buttons'

// Img
import Bob from '/img/bob.webp'

const Card = styled.div`
  width: 18rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #673AB7;
`

const Div = styled.div`
    display: grid;
    justify-content: center; 
`

const Img01 = styled.img`
  width: 8rem;
  border-radius: 50%;
`

const H4 = styled.h4`
  text-align: center;
  color: #FFFFFF;
`

const P = styled.p`
  text-align: center;
  color: #FFFFFF;
`

const CardCall01 = () => {
  return (
    <>
    <Card>
      <Div>
        <Img01 src={Bob} />
      </Div>

      <Div>
        <H4> CardCall01 </H4>
        <P> Bob </P>
      </Div>

      <Div>
        <ButtonBigRed> J </ButtonBigRed>
        <ButtonBigGreen> A </ButtonBigGreen>
      </Div>
    </Card>
    </>
  )
}

export default CardCall01
