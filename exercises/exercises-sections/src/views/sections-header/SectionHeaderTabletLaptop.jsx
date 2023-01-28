
import { } from 'react'
import { Section, Div, H1, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/cards-float/CardFloat'

const SectionTabletLaptop = () => {
  return (
        <>
            <Section width="100%" padding='.625rem' borderRadius='4rem' background='linear-gradient(130deg, #FFEB3B, #FFF176)'>
                <Div marginY='0.5rem'>
                    <H1 textCenter colorGray700> Lorem Ipsum </H1>
                    <P fontSize='1.2rem' marginY='0.5rem' textCenter colorGray600> Lorem Ipsum passages, and more recently with desktop publishing </P>
                </Div>

                <Div displayGrid gridTemplateColumns='repeat(2, auto)' gap='.6rem' justifyContent='center'>
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

export default SectionTabletLaptop
