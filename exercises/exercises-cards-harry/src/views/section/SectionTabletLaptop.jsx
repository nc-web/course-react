
import {} from 'react'
import { Section, Div, H1, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/card-basic/Card01'

const SectionTableLaptop = () => {
  return (
        <>
        <Section width='100%' padding='.625rem' borderRadius='4rem' background='linear-gradient(135deg, #ffeb3b, #fff176)'>
            <Div marginY='0.5rem'>
                <H1 textCenter Color='#424242'>Lorem ipsum dolor</H1>
                <P fontSize='1.2rem' marginY='.5rem' textCenter>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</P>
            </Div>
            <Div displayGrid gridTemplateColumns='repeat(2,auto)' gap='.5rem' jcCenter>
                <Div>
                    <Card01 />
                </Div>

                <Div>
                    <Card01 />
                </Div>

                <Div>
                    <Card01 />
                </Div>
            </Div>
        </Section>
        </>
  )
}

export default SectionTableLaptop
