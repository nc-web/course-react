
import { } from 'react'
import Icon from '@mdi/react'
import { Article, Div, Img, H1, H4, P } from 'nc-styles-react'

// Img
import Foto from '/img/foto.webp'

// Icons
import { mdiFacebook, mdiTwitter, mdiWeb } from '@mdi/js'

const CardsFooter01 = () => {
  return (
    <>
    <Article width='18rem' bgColorGray100 borderRadius='1rem'>
      <Div displayGrid jcCenter boxShadowBR1>
          <Img src={Foto} width='18rem' borderRadius='1rem'></Img>
      </Div>

      <Div>
        <Div displayGrid jcCenter padding='.625rem'>
          <H1 colorGray500>ipsum dolor</H1>
          <H4 colorBlue200 textCenter>amet consectetur</H4>
        </Div>

        <Div>
          <P textCenter>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
        </Div>

        <Div displayFlex jcCenter marginT='.6rem'>
          <Div>
            <Icon path={mdiFacebook} size='2rem' color='#1565C0' ></Icon>
          </Div>

          <Div>
            <Icon path={mdiTwitter} size='2rem' color='#90CAF9' ></Icon>
          </Div>

          <Div>
            <Icon path={mdiWeb} size='2rem' color='#F48FB1' ></Icon>
          </Div>
        </Div>
        <Div bgColorGray300 borderRadiusBR='.3rem' borderRadiusBL='.3rem' padding='.625rem'>
            <P textCenter > Lorem Ipsum </P>
        </Div>
      </Div>
    </Article>
    </>
  )
}

export default CardsFooter01
