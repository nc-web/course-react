
import {} from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'

// Componens
import { ButtonBig } from './components/buttons'

// Icons
import { mdiPhone, mdiEmail, mdiPhoneHangup } from '@mdi/js'

// Img
import Bob from '/img/bob.webp'

const Card = styled.div`
  width: 18rem;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 2px 2px .3rem .1rem rgba(0, 0, 0, 0.3);
  background-color: #673AB7;
`

const DivHeader = styled.div`
    display: grid;
    justify-content: center; 
`

const Img01 = styled.img`
  width: 8rem;
  border-radius: 50%;
`

const H3 = styled.h3`
  text-align: center;
  color: #FFFFFF;
`

const P = styled.p`
  text-align: center;
  color: #FFFFFF;
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
        <Img01 src={Bob} />
      </DivHeader>

      <div>
        <H3> CardCall01 </H3>
        <P> Bob </P>
      </div>

      <DivFooter>
        <ButtonBig bgColor='#4CAF50'> <Icon path={mdiPhone} size='2rem' color='#FFFF'/> </ButtonBig>
        <Icon path={mdiEmail} size='2rem' color='#455A64'/>
        <ButtonBig bgColor='#EF5350'> <Icon path={mdiPhoneHangup} size='2rem' color='#FFFF'/> </ButtonBig>
      </DivFooter>
    </Card>
    </>
  )
}

export default CardCall01
