
import {} from 'react'
import { Link } from 'react-router-dom'
import { Article, Div, Img, Button, H5, P } from 'nc-styles-js'

// Image
import Andres from '/img/andres.webp'

const CardAndres01 = () => {
  return (
    <>
        <Article padding='1rem' borderRadius='.8rem' border='.125rem solid white' width='17rem' bgColorBlue100 boxShadowBR2>
        <Div displayGrid justifyContent='center'>
          <Img src={Andres} alt='Andres Giraldo' width='8rem' borderRadius='50%' />
        </Div>

        <Div>
          <H5 textCenter colorGray800 marginTop='.8rem'> Andres Giraldo </H5>
          <P textCenter colorGray600 marginTop='.2rem'> Developer Web </P>
        </Div>

        <Div displayGrid jcCenter marginTop='1.1rem'>
          <Link to='/card-andres'>
            <Button button5 bgColorWhite colorGray600> Ver </Button>
          </Link>
        </Div>
      </Article>
    </>
  )
}

export default CardAndres01
