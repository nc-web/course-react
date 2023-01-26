
import { } from 'react'
import Icon from '@mdi/react'
import { Article, Div, Img, H1, H3, P } from 'nc-styles-react'

// Img
import Profile from '/img/product-01.webp'

// Icons
import { mdiFacebook } from '@mdi/js'

const CardsFooter01 = () => {
  return (
    <>
    <Article Widht='18rem' bgColorGray300>
        <Div>
            <Img src={Profile} width='18rem'/>
        </Div>

        <Div>
            <H1></H1>
            <H3></H3>
        </Div>
        <Div>
            <P></P>
        </Div>

        <Div>
            <Div>
                <Icon path={mdiFacebook} size='2rem' color='#0D47A1'></Icon>
            </Div>

            <Div>
            </Div>

            <Div>
            </Div>
        </Div>
    </Article>

    </>
  )
}

export default CardsFooter01
