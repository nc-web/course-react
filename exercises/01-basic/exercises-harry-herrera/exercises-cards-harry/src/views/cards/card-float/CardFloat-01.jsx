
import { } from 'react'
import Icon from '@mdi/react'
import { Article, Div, H3, H5, Img } from 'nc-styles-react'

// Img
import Foto from '/img/foto.webp'

// Icons
import { mdiClockAlert, mdiInstagram, mdiFacebook } from '@mdi/js'

const CardFloat = () => {
  return (
        <>
            <Div displayGrid position='relative' top='3rem' left='.5rem'>
                <Img src={Foto} width='18rem' borderRadius='2rem' boxShadow='.1rem .1rem .1rem .1rem rgba(0, 0, 0, 0.5)'></Img>
            </Div>
            <Article width='19rem' padding='.625rem' borderRadius='2rem' bgColorGray200>
                <Div displayGrid jcCenter>
                    <Div position='relative' top='.5rem' left='0' borderRadius='50%' padding='.3rem' bgColorGray400 boxShadow='.1rem .1rem .1rem .1rem rgba(0, 0, 0, 0.5)' >
                        <Icon path={mdiClockAlert} size='2rem' color='#90CAF9'></Icon>
                    </Div>
                </Div>

                <Div padding='.5rem' marginT='1rem'>
                    <H3 textCenter colorGray800>Lorem</H3>
                    <H5 textCenter colorGray500>ipsum</H5>
                    <H5 textCenter colorGray500>text</H5>
                </Div>

                <Div displayFlex jcCenter marginT='.4rem'>
                    <Div borderRadius='.8rem' padding='.625rem' bgColorGray800>
                        <Icon path={mdiInstagram} size='1.5rem' color='#F48FB1'></Icon>
                        <Icon path={mdiFacebook} size='1.5rem' color='#1565C0'></Icon>
                    </Div>
                </Div>
            </Article>
        </>
  )
}

export default CardFloat
