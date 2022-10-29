
import { } from 'react'

// Components NC
import Header from '@components/header'
import Div from '@components/div'
import Footer from '@components/footer'
import H2 from '@components/h2'
import H6 from '@components/h6'
import A from '@components/a'
import Button from '@components/button'

const ErrorPage = () => {
    return (
        <>
            <Header bgGray200>
                <Div>
                    <H2>ERROR PAGE</H2>
                </Div>

                <Div>
                    <A href="/">
                        <Button> Atras </Button>
                    </A>
                </Div>
            </Header>
            <Footer bgGray600>
                <Div>
                    <H6>Newsoft Computer</H6>
                </Div>
            </Footer>
        </>
    )
}

export default ErrorPage
