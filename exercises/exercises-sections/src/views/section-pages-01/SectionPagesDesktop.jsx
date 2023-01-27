
import Icon from '@mdi/react'
import { Section, Div, Button, P } from 'nc-styles-react'

// Card
import Card01 from '../cards/cards-float/CardFloat'
// Icon
import { mdiDatabase } from '@mdi/js'

const SectionPagesDesktop = () => {
  return (
        <>
            <Section width='100%' backgroundColor='#F55'>
                <Div displayFlex positionAbsolute bgColorPurple200>
                    <Div
                        position='relative'
                        padding='1.2rem'
                        top='12.5rem'
                        left='25'
                        z-index='1'

                    >
                        <Card01 />
                    </Div>

                    <Div
                        position='relative'
                        padding='1.2rem'
                        top='40rem'
                        left='6.2'
                        z-index='1'
                    >
                        <Card01 />
                    </Div>
                </Div>

                <Div
                    displayGrid
                    width='100%'
                    height='20vw'
                    backgroundImage='url(/img/bg-section.jpg)'
                    backgroundRepeact='no-repeat'
                    content='""'
                    filter='brightness(60%)'
                >
                    <Div displayGrid gtCol2 positionRelative padding8 bgRed200>
                        <Div displayGrid aiCenter positionRelative>
                            <P textWhite textCenter> Login </P>
                        </Div>

                        <Div displayFlex jcCenter aiCenter>
                            <Div>
                                <Button bgWhite borderRadius5 marginX3>
                                    <Div displayFlex aiCenter padding7>
                                        <Icon path={mdiDatabase} title="Escritorio" size={0.9} color="#8C8686" />
                                        <P colorBlue200 marginX2> Login </P>
                                    </Div>
                                </Button>
                            </Div>
                        </Div>
                    </Div>
                </Div>

                <Div
                    displayGrid
                    padding='5rem'
                    borderRadius='.625rem'
                    position='relative'
                    top='-4.3rem'
                    margin='0 3.1rem'
                    bgColor='#FAFAFA'
                >
                    <Div displayGrid jcCenter padding10 marginT9>
                        <Card01 />
                    </Div>

                    <Div displayGrid gtCol12 marginT4 padding10>
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                    </Div>

                    <Div displayGrid jcCenter marginT7 padding20>
                        <Div
                            displayGrid
                            gridTemplateColumss='repeat(3, auto)'
                            margin='0 0 0 1.25rem'
                            gap='1.8'
                        >
                            <Card01 />
                            <Card01 />
                            <Card01 />
                            <Card01 />
                            <Card01 />
                            <Card01 />
                        </Div>
                    </Div>
                </Div>
            </Section>
        </ >
  )
}

export default SectionPagesDesktop
