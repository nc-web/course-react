
import { } from 'react'
import Icon from '@mdi/react'
import { Article, Div, Img, H1, H3, P } from 'nc-styles-react'

// Img
import Foto from '/img/foto.webp'

// Icons
import { mdiFacebook } from '@mdi/js'

const CardsFooter01 = () => {
  return (
    <>
    <Article Width="18rem" bgColor="#E0E0E0">
      <Div>
          <Img src={Foto}></Img>
      </Div>

      <Div>
        <Div>
          <H1>ipsum dolor</H1>
          <H3>amet consectetur</H3>
        </Div>

        <Div>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
        </Div>
        <Div>
          <Div>
            <Icon path={mdiFacebook} size='2rem' color='#1565C0' ></Icon>
          </Div>

          <Div>

          </Div>

          <Div>

          </Div>
        </Div>
      </Div>
    </Article>
    </>
  )
}

export default CardsFooter01
