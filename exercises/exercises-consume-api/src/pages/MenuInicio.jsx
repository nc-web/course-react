
import { } from 'react'

// Components Base
import Div from '@components/div'

// Layouts
import LayoutDashboard from '@layouts/LayoutDashboard'

// Views
import CardHeader from '@views/cards/CardHeader'
import CardContador from '@views/cards/CardContador'
// import CardScrollHooks from '@views/cards/CardScrollHooks'
import CardAPIPokemons from '@views/cards/CardAPIPokemons'
import CardAPIRickAndMorty from '@views/cards/CardAPIRickAndMorty'
import CardContadorHoras from '@views/cards/CardContadorHoras'
import CardTodoListBasic from '@views/cards/CardTodoListBasic'

const MenuInicio = () => {
  return (
    <>
      <LayoutDashboard>
        <Div displayGrid>

          <Div displayGrid>
            <Div displayGrid>
              <CardHeader />
            </Div>

            <Div displayGrid gridCols4 gap20 marginY7>
              <CardAPIPokemons />
              <CardAPIRickAndMorty />
              <CardContadorHoras />
              <CardTodoListBasic />
              <CardContador />
            </Div>
          </Div>

        </Div>
      </LayoutDashboard>
    </>
  )
}

export default MenuInicio
