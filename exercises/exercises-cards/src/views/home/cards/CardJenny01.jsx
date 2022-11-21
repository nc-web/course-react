
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
import Jenny from '/img/jenny.webp'

const Card = styled(Article)`
  padding: 1rem;
  border-radius: .8rem;
  border: 2px solid white;
  width: 17rem;
`

const ImageJenny = styled(Img)`
  width: 8rem;
  border-radius: 50%;
`

const CardJenny01 = () => {
  return (
    <>
        <Card bgBlue100 boxShadowBR2>
        <Div displayGrid jcCenter>
          <ImageJenny src={Jenny} alt='jenny gomez' />
        </Div>

        <Div>
          <H5 textCenter textGray800 marginT='.8rem'> Jenny Gómez </H5>
          <P textCenter textGray600 marginT='.2rem'> Maquetadora Web </P>
        </Div>

        <Div displayGrid jcCenter marginT='1.1rem'>
          <Link to='/card-jenny'>
            <Button button5 bgWhite textGray600> Ver </Button>
          </Link>
        </Div>
      </Card>
    </>
  )
}

export default CardJenny01
