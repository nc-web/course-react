
import {} from 'react'
import { Section, Div, P } from 'nc-styles-react'

// Card
import Card01 from '../cards/card-basic/Card01'

const sectionMobile = () => {
  return (
        <>
        <Section>
            <Div>
            </Div>
            <Div>
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
            <Div>
                <P></P>
            </Div>
        </Section>
        </>
  )
}

export default sectionMobile
