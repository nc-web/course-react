
import {} from 'react'

// NC Components Base
import Section from '@components/section'
import Div from '@components/div'
import H4 from '@components/h4'

// Card
import CardAndres from '@views/cards-andres-giraldo/Card01'
import CardJenny from '@views/cards-jenny-gomez/Card01'

const index = () => {
  return (
    <>
      <Section displayGrid jcCenter padding="2rem" bgGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textCenter textGray800> CARDS </H4>
        </Div>

        <Div displayGrid gtCol4 gap='1rem' jcCenter>
            <CardAndres/>
            <CardJenny/>
        </Div>
      </Section>
    </>
  )
}

export default index
