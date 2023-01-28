
import {} from 'react'
import { Section, Div, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/card-basic/Card01'

const SectionHeader = () => {
  return (
        <>
        <Section width='100%' backgroundColor='#fafbff'>
            <Div width='100%' height='55%' background='linear-gradient(130deg, #a790f8, #78c4f5)'>
            </Div>
            <Div displayGrid gridTemplateColumns='repeat(3,auto)' gap='1.8rem' position='relative' top='-10rem' left='0' jcCenter aiCenter>
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
            <Div displayGrid jcCenter aiCenter>
            <P csolor='#8b8b8b' textCenter> If you need more or less? Contact about us </P>
            </Div>
        </Section>
        </>
  )
}

export default SectionHeader
