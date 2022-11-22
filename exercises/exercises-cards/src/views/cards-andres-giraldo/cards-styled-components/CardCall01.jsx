
import {} from 'react'
import styled from 'styled-components'

// Components
// import ButtonBig2 from './components/buttons/ButtonBig'
import { ButtonBigRed, ButtonBigGreen, ButtonLittle } from './components/buttons'

// Image
import ImageProfile from '/img/capitan-america.webp'

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
const Image = styled.img`
  width: 8rem;
  border-radius: 50%;
`

const Title = styled.h4`
  color: #E0E0E0;
  text-align: center;
`

const SubTitle = styled.p`
  color: #BDBDBD;
  text-align: center;
`

const CardCall01 = () => {
  return (
    <>
      <Card>
        <Div>
          <Image src={ImageProfile} />
        </Div>
        
        <Div>
          <Title>Card Call 01</Title>
          <SubTitle>Lorem, ipsum.</SubTitle>
        </Div>

        <Div>
          <ButtonBigGreen>BBdsf</ButtonBigGreen>
          
          <ButtonLittle>BL</ButtonLittle>
        </Div>
        <ButtonBigRed>fdsgsdfghsdfghsgh</ButtonBigRed>
      </Card>
    </>
  )
}

export default CardCall01
