
import { } from 'react'
import styled from 'styled-components'

// Components Base
import Div from '@components/div'

// Views
import Menu from '@views/nav/Menu'
import MenuVertical from '@views/navs/MenuVertical'

const ContainerMain = styled(Div)`
    display: grid;
    grid-template-columns: 18% 82%;
    height: 800px;
    padding-top: 60px;
`

const ContainerMenuVertical = styled(Div)`
    display: grid;
    background-color: #5E5E5E;
`

const DashboardReact = ({ children }) => {
  return (
    <>
      <Div displayGrid>
        <Menu />
      </Div>

      <ContainerMain>
        <ContainerMenuVertical>
          <MenuVertical />
        </ContainerMenuVertical>

        <Div displayGrid bgGray100>
          {children}
        </Div>

      </ContainerMain>
    </>
  )
}

export default DashboardReact
