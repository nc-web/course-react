
import {} from 'react'
import { Link } from 'react-router-dom'
import { Article, Div, Img, Button, H5, P } from 'nc-styles-js'

// Image
import Jenny from '/img/jenny.webp'

const CardJenny01 = () => {
  return (
    <>
        <Article padding='1rem' borderRadius='.8rem' border='.125rem solid white' width='17rem' bgColorBlue100 boxShadowBR2>
        <Div displayGrid jcCenter>
          <Img src={Jenny} alt='jenny gomez' width='8rem' borderRadius='50%' />
        </Div>

        <Div>
          <H5 textCenter colorGray800 marginT='.8rem'> Jenny Gómez </H5>
          <P textCenter colorGray600 marginT='.2rem'> Maquetadora Web </P>
        </Div>

        <Div displayGrid jcCenter marginT='1.1rem'>
          <Link to='/card-jenny'>
            <Button button5 bgColorWhite colorGray600> Ver </Button>
          </Link>
        </Div>
      </Article>
    </>
  )
}

export default CardJenny01
