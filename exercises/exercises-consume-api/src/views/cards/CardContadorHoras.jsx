
import {  } from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'

// Link React
import { Link } from 'react-router-dom'

// Components Base
import Div from '@components/div'
import H2 from '@components/h2'
import H4 from '@components/h4'

// Icons Font Awesome
import { mdiHome } from '@mdi/js'


const Card = styled(Div)`
    background-color: #5E5E5E;
    padding: 10px;
    width: 203px;
    height: 154px;
    margin: 10px 10px;
    border-radius: 10px;

    &:hover {
        transition: .5s;
        box-shadow: 2px 3px 1px 1px #A2BD00;
    }
`


const CardContadorHoras = () => {
    return (
        <>
            <Link to="/contador-horas">
                    <Card>
                        <Div displayGrid jcCenter>
                            <Icon src={mdiHome} size={1} color='#A2BD00'/>
                        </Div>

                        <Div displayGrid jcCenter>
                            <H2 p2 textGray200 center> CONTADOR HORAS </H2>
                            <H4 p3 textGray200 center lighter> useState </H4>
                        </Div>
                    </Card>
            </Link>
        </>
    )
}

export default CardContadorHoras