
import { } from 'react'
import Icon from '@mdi/react'
import { Article, Div, Img, H1, H4, P } from 'nc-styles-react'

// Img
import Profile from '/img/product-01.webp'

// Icons
import { mdiFacebook, mdiTwitter, mdiWeb } from '@mdi/js'

const CardsFooter01 = () => {
  return (
    <>
    <Article width='18rem' bgColorGray200 borderRadius='.3rem'>
        <Div displayGrid jcCenter boxShadowBR2>
            <Img src={Profile} width='18rem' borderRadius='.3rem'/>
        </Div>

        <Div displayGrid jcCenter padding='.625rem'>
            <H1 colorGray400> Lorem Ipsum  </H1>
            <H4 textCenter colorBlue400> dummy </H4>
        </Div>

        <Div>
            <P textCenter textIndigo500 colorGray400> Long established fact that a reader will be distracted by the text content of  </P>
        </Div>

        <Div displayFlex jcCenter marginY='.5rem'>
            <Div>
                <Icon path={mdiFacebook} size='2rem' color='#0D47A1'></Icon>
            </Div>

            <Div>
                <Icon path={mdiTwitter} size='2rem' color='#90CAF9'></Icon>
            </Div>

            <Div>
                <Icon path={mdiWeb} size='2rem' color='#F48FB1'></Icon>
            </Div>
        </Div>

        <Div bgColorGray500 borderRadiusBR='.3rem' borderRadiusBL='.3rem'padding='.625rem'>
            <P textCenter colorGray400> lorem imsut </P>
        </Div>
    </Article>

    </>
  )
}

export default CardsFooter01
