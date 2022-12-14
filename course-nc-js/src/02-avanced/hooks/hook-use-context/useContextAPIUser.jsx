
import React, { Fragment } from 'react'

// Context
import UserState from './context/users/user-state.js'

// NC Components Basic
import Div from 'components/div'
import H4 from 'components/h4'

// Components
import Profile from './components/users/Profile'
import UsersList from './components/users/UsersList'

function useContextAPIUser () {
  return (
    <>
      <UserState>
        <Div>
          <Div bgTeal600 paddingY10>
            <H4 textCenter colorWhite> API CONTEXT</H4>
          </Div>

          <Div displayFlex>
            <UsersList />
            <Profile />
          </Div>
        </Div>
      </UserState>
    </>
  )
}

export default useContextAPIUser
