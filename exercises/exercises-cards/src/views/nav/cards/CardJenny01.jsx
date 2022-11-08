import { } from 'react'
import { Link } from 'react-router-dom'

// NC Components Base
import Div from '@components/div'
import H6 from '@components/h6'
import P from '@components/p'

const CardJenny01 = () => {
  return (
    <>
    <Link to='/card-jenny'>
        <Div bgGray400>
            <H6>Card Jenny 01</H6>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</P>
            </Div>
    </Link>
    </>
  )
}

export default CardJenny01
