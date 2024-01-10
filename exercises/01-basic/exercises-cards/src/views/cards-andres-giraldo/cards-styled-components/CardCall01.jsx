
import {} from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'

// Components
// import ButtonBig2 from './components/buttons/ButtonBig'
import { ButtonBig } from './components/buttons'

// Icons
import { mdiPhone, mdiPhoneHangup, mdiEmail } from '@mdi/js'

// Image
import ImageProfile from '/img/capitan-america.webp'

const Card = styled.div`
  width: 18rem;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: #673AB7;
  box-shadow: 2px 2px .3rem .1rem rgba(0, 0, 0, 0.3);
`

const DivHeader = styled.div`
  display: grid;
  justify-content: center;
`

const Image = styled.img`
  width: 8rem;
  border-radius: 50%;
`

const Title = styled.h3`
  color: #E0E0E0;
  text-align: center;
`

const SubTitle = styled.p`
  color: #BDBDBD;
  text-align: center;
`

const DivFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CardCall01 = () => {
  return (
    <>
      <Card>
        <DivHeader>
          <Image src={ImageProfile} />
        </DivHeader>
        <div>
          <Title>Card Call 01</Title>
          <SubTitle>Lorem, ipsum.</SubTitle>
        </div>
        <DivFooter>
          <ButtonBig bgColor='#4CAF50'><Icon path={mdiPhone} size='2rem' color='#FFFFFF' /></ButtonBig>
          <Icon path={mdiEmail} size='2rem' color='#BDBDBD' />
          <ButtonBig bgColor='#EF5350'><Icon path={mdiPhoneHangup} size='2rem' color='#FFFFFF' /></ButtonBig>
        </DivFooter>
      </Card>
    </>
  )
}

export default CardCall01
