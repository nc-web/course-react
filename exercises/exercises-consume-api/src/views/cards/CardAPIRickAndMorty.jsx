
import { } from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'

// Link React
import { Link } from 'react-router-dom'

// Components Base
import Div from '@components/div'
import H2 from '@components/h2'
import H4 from '@components/h4'

// Icons
import { mdiHome } from '@mdi/js'

const Card = styled(Div)`
    display: grid;
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
      <Link to='/api-rick-morty'>
        <Card>
          <Div displayGrid marginAuto>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
          </Div>

          <Div displayGrid jcCenter>
            <H2 textGray200> API Rick and Morty </H2>
            <H4 textGray200 lighter> useState - useEffect </H4>
          </Div>
        </Card>
      </Link>
    </>
  )
}

export default CardContadorHoras
