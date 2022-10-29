
import {  } from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'

// Components Base
import Div from '@components/div'
import H2 from '@components/h2'
import H4 from '@components/h4'

// Icons
import { mdiHome } from '@mdi/js'


const Card = styled(Div)`
    display: grid;
    background: linear-gradient( 155deg,#0353F4,#1957D2,#9138CB);
    background: linear-gradient( 170deg,#1E88E5,#1E88E5,#9138CB);
    
    width: 100%;
    height: 300px;
`


const CardGradient02 = () => {
    return (
        <>
            <Card>
                <Div displayGrid jcCenter>
                    <Icon src={mdiHome} size={1} color='#A2BD00'/>
                </Div>

                <Div displayGrid jcCenter>
                    <H2 textGray200 > REACT HOOKS </H2>
                    <H4 textGray200 > MENU </H4>
                </Div>
            </Card>

        </>
    )
}

export default CardGradient02