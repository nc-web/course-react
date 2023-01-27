
import Styled from 'styled-components'
import Icon from '@mdi/react'

// Componentes
import Div from 'components-advanced-nc-styles-old/components/div'
import Img from 'components-advanced-nc-styles-old/components/img'
import Button from 'components-advanced-nc-styles-old/components/button'
import P from 'components-advanced-nc-styles-old/components/p'

// Utils
import { device } from '@components/assets/utils/divice'

// Card
import Card01 from '../cards/cards-float/CardFloat'

// Icon
import { mdiDatabase } from '@mdi/js'

const Section = Styled(Div)`
    background-color: #F5F5F5; 
    width: 100%;  
`

const ContainerPrincipal = Styled(Div)`
    padding: 70px 20px;
    width:100%;
    height: 20vw;
    background-image: url('https://bucket-nc-images.s3.amazonaws.com/clients/pwa+my-medical-books/login/bg-login-2.jpg');
    background-repeat: no-repeat;
    content: "";
    filter:  brightness(60%);
`

const TextButtonP = Styled(P)`
    color: #0B87F9;
`

const ContainerText = Styled(Div)`
    display: grid;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    top: -15px;
    margin: 0 20px;
    background-color: #FAFAFA;

    @media ${device.mobileS} {
        display: grid;
        
        padding: 30px;
        border-radius: 10px;
        position: relative;
        top: -15px;
        margin: 0 20px;
        background-color: #FAFAFA;
    }
`

const ContainerGrilla01 = Styled(Div)`
        @media ${device.laptop} {
            display: grid;
            grid-template-columns: repeat(6, auto);
            position: relative;
            padding: 20px;
            top: 120px;
            left: 220px;
            z-index: 1;
        }

        @media ${device.tablet} {
            display: grid;
            grid-template-columns: repeat(2, auto);
            position: relative;
            padding: 20px;
            top: 50px;
            left: 230px;
            z-index: 1;
        }

        @media ${device.mobileL} {
            display: grid;
            grid-template-columns: repeat(2, auto);
            position: relative;
            padding: 20px;
            top: 50px;
            left: 60px;
            z-index: 1;
        }

        @media ${device.mobileM} {
            display: grid;
            grid-template-columns: repeat(2, auto);
            position: relative;
            padding: 20px;
            top: 50px;
            left: 42px;
            z-index: 1;
        }

        @media ${device.mobileS} {
            display: grid;
            grid-template-columns: repeat(2, auto);
            position: relative;
            padding: 20px;
            top: 50px;
            left:0px;
            z-index: 1;
        }
`

const ContainerCard01 = Styled(Div)`
    position: relative;
    padding: 20px;
    top:0;
    left: 0px;
    z-index: 1;

    @media ${device.laptop} {
        position: relative;
        padding: 20px;
        top: 1800px;
        left: 300px;
        z-index: 1;
    }

    @media ${device.tablet} {
        position: relative;
        padding: 20px;
        top: 3600px;
        left: 200px;
        z-index: 1;
    }

    @media ${device.mobileL} {
        position: relative;
        padding: 20px;
        top: 3600px;
        left: 0px;
        z-index: 1;
    }

    @media ${device.mobileM} {
        position: relative;
        padding: 20px;
        top: 3700px;
        left: 0px;
        z-index: 1;
    }

    @media ${device.mobileS} {
        position: relative;
        padding: 20px;
        top: 4000px;
        left: 0px;
        z-index: 1;
    }
`

const ContainerGrilla02 = Styled(Div)`
    display: grid;
    grid-template-columns: 100%;
    gap: 30px;

    @media ${device.laptop} {
        display: grid;
        grid-template-columns: repeat(6, auto);
        gap: 30px;
    }

    @media ${device.mobileS} {
        display: grid;
        grid-template-columns: 100%;
        gap: 30px;
    }
`

const ContainerGrilla03 = Styled(Div)`
    display: grid;
    grid-template-columns: 100%;
    gap: 30px;

    @media ${device.laptop} {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 30px;
    }

    @media ${device.mobileS} {
        display: grid;
        grid-template-columns: 100%;
        gap: 30px;
    }
`

const SectionPagesMobile = () => {
  return (
        <>
            <Section>
                <Div displayGrid positionAbsolute>
                    <ContainerGrilla01>
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                        <Card01 />
                    </ContainerGrilla01>

                    <ContainerCard01>
                        <Card01 />
                    </ContainerCard01>
                </Div>

                <ContainerPrincipal>
                    <Div displayGrid gtCol2 positionRelative padding8>
                        <Div displayGrid aiCenter positionRelative>
                            <P textPurple300 textCenter> Login </P>
                        </Div>

                        <Div displayFlex jcCenter aiCenter>
                            <Div>
                                <Button bgWhite borderRadius5 marginX3>
                                    <Div displayFlex aiCenter padding7>
                                        <Icon path={mdiDatabase} title="Escritorio" size={0.9} color="#8C8686" />
                                        <TextButtonP fontSize7 marginX2> Login </TextButtonP>
                                    </Div>
                                </Button>
                            </Div>
                        </Div>
                    </Div>
                </ContainerPrincipal>

                <ContainerText>
                    <Div displayGrid jcCenter>
                        <Card01 />
                    </Div>

                    <Div displayGrid jcCenter>
                        <ContainerGrilla02 marginT4 padding10>
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
                        </ContainerGrilla02>
                    </Div>

                    <Div displayGrid jcCenter marginT7 padding10>
                        <ContainerGrilla03>
                            <Card01 />
                            <Card01 />
                            <Card01 />
                            <Card01 />
                        </ContainerGrilla03>
                    </Div>
                </ContainerText>
            </Section>
        </ >
  )
}

export default SectionPagesMobile
