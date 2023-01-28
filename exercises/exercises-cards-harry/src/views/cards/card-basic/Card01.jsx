
import { } from 'react'
import { Article, Div, Img, H5, P } from 'nc-styles-react'
import Icon from '@mdi/react'

// Img
import foto from '/img/foto01.webp'

// Icons
import { mdiStar, mdiVideoOutline, mdiMessageMinusOutline, mdiPhone } from '@mdi/js'

const Card01 = () => {
  return (
        <>
        <Article width='18rem' padding='1rem' borderRadius='1rem' backgroundColor='#f4f5f4' boxShadow='.1rem .1rem .5rem .3rem rgba(104, 104, 104, 0.5)'>
              <Div displayGrid jcCenter borderRadius='50%' padding='.625rem' backgroundColor='#f2f4f1' boxShadow='.1rem .1rem .1rem rgba(117, 117, 117, 0.5)'>
                <Img src={foto} width='14.5rem' ></Img>
              </Div>
              <Div displayGrid jcCenter marginT='.5rem'>
                <Div borderRadius='.5rem' padding='.3rem' backgroundColor='#278a5d'>
                  <Icon path={mdiStar} size='1rem' color='#ffffff' ></Icon>
                </Div>
              </Div>
              <Div displayFlex jcCenter marginT='1rem' bgColorSkyBlue800 gap='.6rem'>
                <Div padding='.6rem' borderRadius='.8rem' backgroundColor='#dce3f5'>
                  <Icon path={mdiVideoOutline} size='1.5rem'></Icon>
                </Div>

                <Div padding='.6rem' borderRadius='.8rem' backgroundColor='#dce3f5'>
                  <Icon path={mdiMessageMinusOutline} size='1.5rem'></Icon>
                </Div>

                <Div padding='.6rem' borderRadius='.8rem' backgroundColor='#dce3f5'>
                  <Icon path={mdiPhone} size='1.5rem'></Icon>
                </Div>
              </Div>
              <Div displayGrid jcCenter padding='.625rem'>
                <H5 marginT='.5rem' textCenter> $100 - $200</H5>
                <P marginT='.5rem' textCenter> lorem ipsum dolor</P>
              </Div>
              <Div displayFlex jcCenter marginT='.4rem'>
                <Div borderRadius='1rem' padding='.625rem' backgroundColor='#375bf4'>
                  <P color='#ffffff'> Book Consultation </P>
                </Div>
              </Div>
        </Article>
        </>
  )
}

export default Card01
