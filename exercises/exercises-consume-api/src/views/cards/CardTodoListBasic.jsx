
import {  } from 'react'
import styled from 'styled-components'
import Icon from'@mdi/react'

// Link React
import { Link } from 'react-router-dom'

// Components Base
import Div from '@components/div'
import P from '@components/p'
import Small from '@components/small'

// Icons
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


const CardTodoListBasic = () => {
    return (
        <>
            <Link to="/contador-horas">
                    <Card>
                        <Div displayGrid jcCenter>
                            <Icon src={mdiHome} size={1} color='#A2BD00'/>
                        </Div>

                        <Div displayGrid jcCenter>
                            <P textGray200 > TODO LIST BASIC </P>
                            <Small textGray200 lighter> useState - useEffect </Small>
                        </Div>
                    </Card>
            </Link>
        </>
    )
}

export default CardTodoListBasic