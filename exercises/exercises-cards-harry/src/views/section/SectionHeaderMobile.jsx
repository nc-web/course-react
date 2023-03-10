
import {} from 'react'
import { Section, Div, H2, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/card-basic/Card01'

const SectionMobile = () => {
  return (
        <>
        <Section width='100%' padding='.625rem' borderRadius='4rem' background='linear-gradient(135deg, #ffeb3b, #fff176)'>
            <Div marginY='1rem'>
                <H2 textCenter Color='#424242' >Lorem ipsum dolor</H2>
                <P fontSize='1rem' marginY='.5rem' textCenter>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</P>
            </Div>
            <Div displayGrid jcCenter>
                <Div displayGrid gridtemplateColumns='100%' gap='2rem' jcCenter aiCenter>
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
            </Div>
        </Section>
        </>
  )
}

export default SectionMobile
