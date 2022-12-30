
import {} from 'react'
import Icon from '@mdi/react'
import { Link } from 'react-router-dom'
import { Article, Div, Button, H5, P } from 'nc-styles-react'

// Icons
import { mdiFormatListChecks } from '@mdi/js'

const CardAPI01 = () => {
  return (
    <>
      <Article padding='1rem' borderRadius='.8rem' width='15rem' bgColorBlue400 boxShadowBR2>
        <Div displayGrid justifyContent='center' marginY='1rem'>
          <Icon path={mdiFormatListChecks} size='2.5rem' color='#F06292' />
        </Div>

        <Div>
          <H5 textCenter colorGray100 marginY='.8rem'> API 01 </H5>
          <P textCenter colorGray200 marginY='.3rem'> Developer: Andres Giraldo </P>
          <P textCenter colorGray200 marginY='.3rem'> Styles: NC Styles </P>
        </Div>

        <Div displayGrid jcCenter marginT='1.5rem'>
          <Link to='/promises/api-rick-and-morty'>
            <Button button5 bgColorWhite colorGray600> Ver </Button>
          </Link>
        </Div>
      </Article>
    </>
  )
}

export default CardAPI01
