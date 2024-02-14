
import { } from 'react'
import { Article, Div, H6, P } from 'nc-styles-react'

const Credits = () => {
  return (
    <>
      <Article padding='1rem' borderRadius='0.5rem' bgColorGray200 boxShadowBR2>
        <Div displayGrid jcCenter marginT='2rem' marginB='1rem'>
          <H6 textOrange500>Credits</H6>
        </Div>

        <Div marginY='0.5rem'>
          <Div displayFlex aiCenter>
            <P colorGray800>Layout : </P>
            <P marginL='0.3rem' textGray700 fontWeightLighter>Andres Giraldo</P>
          </Div>
        </Div>

        <Div marginY='0.5rem'>
          <Div displayFlex aiCenter>
            <P colorGray800>Dev Frontend : </P>
            <P marginL='0.3rem' textGray700 fontWeightLighter>Andres Giraldo</P>
          </Div>
        </Div>

        <Div displayGrid jcCenter marginT='2rem' marginB='1rem'>
          <H6 textOrange500>Tecnology</H6>
        </Div>

        <Div marginY='0.5rem'>
          <Div displayFlex aiCenter>
            <P colorGray800>Layout : </P>
            <P marginL='0.3rem' textGray700 fontWeightLighter>React</P>
          </Div>
        </Div>

        <Div marginY='0.5rem'>
          <Div displayFlex aiCenter>
            <P colorGray800>Styles : </P>
            <P marginL='0.3rem' textGray700 fontWeightLighter>NC Styles Library</P>
          </Div>
        </Div>

        <Div marginY='0.5rem'>
          <Div displayFlex aiCenter>
            <P colorGray800>Others : </P>
            <P marginL='0.3rem' textGray700 fontWeightLighter>Vite, Slint Standard, Test</P>
          </Div>
        </Div>
      </Article>
    </>
  )
}

export default Credits
