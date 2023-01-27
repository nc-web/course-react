import {} from 'react'
import { Section, Div, H2, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/card-basic/Card01'

const SectionHeaderDesktop = () => {
  return (
        <>
            <Section width='100%' padding='.625rem' borderRadius='4rem' background='linear-gradient(135deg, #ffeb3b, #fff176)'>
                <Div marginT='.9rem'>
                    <H2 textCenter color='#424242' >lorem ipsum dolor</H2>
                    <P fontSize='1rem' textCenter marginT='.5rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</P>
                </Div>
                <Div displayGrid gridTemplateColumns='repeat(3,auto)' margin='5rem' gap='2rem' jcCenter aiCenter>
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
            </Section>
        </>
  )
}

export default SectionHeaderDesktop
