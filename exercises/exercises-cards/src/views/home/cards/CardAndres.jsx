
import {} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Nc Componentes Base
import Article from '@components/article'
import Div from '@components/div'
import Img from '@components/img'
import Button from '@components/button'
import H5 from '@components/h5'
import P from '@components/p'

// Image
import Andres from '/img/andres.webp'

const Card = styled(Article)`
  padding: 1rem;
  border-radius: .8rem;
  border: 2px solid white;
  width: 17rem;
`

const ImageAndres = styled(Img)`
  width: 8rem;
  border-radius: 50%;
`

const CardAndres01 = () => {
  return (
    <>
        <Card backGroundBlue100 boxShadowBR2>
        <Div displayGrid jcCenter>
          <ImageAndres src={Andres} alt='Andres Giraldo' />
        </Div>

        <Div>
          <H5 textAlingCenter colorGray800 marginTop='.8rem'> Andres Giraldo </H5>
          <P textAlingCenter colorGray600 marginTop='.2rem'> Developer Web </P>
        </Div>

        <Div displayGrid jcCenter marginTop='1.1rem'>
          <Link to='/card-andres'>
            <Button button5 bgWhite textGray600> Ver </Button>
          </Link>
        </Div>
      </Card>
    </>
  )
}

export default CardAndres01
