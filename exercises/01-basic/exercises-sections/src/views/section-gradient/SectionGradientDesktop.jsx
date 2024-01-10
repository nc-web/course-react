
import { } from 'react'
import { Section, Div, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/cards-float/CardFloat'

const SectionGradientDesktop = () => {
  return (
        <>
        <Section width='100%' padding='.625rem' backgroundColor='#9E9E9E'>
            <Div width='100%' height='18rem' background='linear-gradient(135deg, #9575CD, #D1C4E9)'>
            </Div>

            <Div displayGrid gridTemplateColumns='repeat(3,auto)' gap='2rem' position='relative' top='-9rem' left='0' jcCenter bgColorRed200>
                <Div>
                    <Card01/>
                </Div>

                <Div>
                    <Card01/>
                </Div>

                <Div>
                    <Card01/>
                </Div>
            </Div>

            <Div>
                 <P textCenter color='#BDBDBD'> Lorem Imsup  dfdgfd</P>
            </Div>
        </Section>
        </>
  )
}

export default SectionGradientDesktop
