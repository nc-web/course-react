
import {} from 'react'

// NC Components Base
import Section from '@components/section'
import Div from '@components/div'
import H4 from '@components/h4'

// Cards Styled Components
import CardCall01CSS from './cards-css/CardCall01'
import CardCall01SC from './cards-styled-components/CardCall01'
import CardCall01CSSModule from './cards-css-module/CardCall01'

const index = () => {
  return (
    <>
      <Section displayGrid jcCenter padding="2rem" bgGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textCenter textGray800> EXERCISES JENNY GÓMEZ </H4>
        </Div>

        <Div displayGrid jcCenter>
          <Div displayGrid gtCol2 gap='1rem' jcCenter>
            <CardCall01CSS/>
          </Div>

          <Div displayGrid gtCol2 gap='1rem' jcCenter>
            <CardCall01SC/>
          </Div>

          <Div displayGrid gtCol2 gap='1rem' jcCenter>
            <CardCall01CSSModule/>
          </Div>
        </Div>
      </Section>
    </>
  )
}

export default index
