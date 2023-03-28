
import { useState } from 'react'

// Components
import Login from './LogIn'
import LogOut from './LogOut'

function Index() {

    const [stateLogin, setStateLogin] = useState(false)
  
    if ( stateLogin === true) {
        return <Login />
    } else {
        return <LogOut />
    }

}

export default Index