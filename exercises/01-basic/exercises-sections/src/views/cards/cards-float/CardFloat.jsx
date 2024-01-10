
import { } from 'react'
import Icon from '@mdi/react'
import { Article, Img, Div, H3, H5 } from 'nc-styles-react'

// Img
import Profile from '/img/jenny.webp'

// Icons
import { mdiFacebook, mdiInstagram } from '@mdi/js'

const CardFloat = () => {
  return (
        <>
            <Div position='relative' top='3rem' left='1rem'>
                 <Img src={Profile} width='18rem' borderRadius='2rem' boxShadow='.1rem .1rem .1rem .1rem rgba(0, 0, 0, 0.5)'/>
            </Div>
            <Article width="20rem" padding='.625rem' borderRadius='2rem' bgColorGray200>
                <Div displayGrid jcCenter>
                    <Div position='relative' top='.9rem' left='0' borderRadius='50%' padding='.7rem' boxShadow='.1rem .1rem .1rem .1rem rgba(0, 0, 0, 0.5)' bgColorGray400>
                        <Icon path={mdiFacebook} size='1.5rem' color='#2E2E2E'></Icon>
                    </Div>
                </Div>
                <Div padding='.5rem' marginT='1.25rem'>
                    <H3 textCenter colorGray800> Jenny Gómez </H3>
                    <H5 textCenter colorGray700> Desarrollo </H5>
                    <H5 textCenter color='#424242'> Web </H5>
                </Div>

                <Div displayFlex jcCenter marginT='.3rem'>
                    <Div padding='.625rem' borderRadius='.4rem' bgColorGray800 >
                        <Icon path={mdiFacebook} size='1rem' color='#FFF59D'></Icon>
                        <Icon path={mdiInstagram} size='1rem' color='#FFF59D'></Icon>
                    </Div>
                </Div>
            </Article>
        </>
  )
}

export default CardFloat
