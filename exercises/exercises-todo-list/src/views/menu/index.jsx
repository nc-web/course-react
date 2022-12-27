
import { useEffect } from 'react'

// Hooks
import useScreen from '@assets/hooks/screens/useScreen'

// Views
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const Header = () => {
  const [
    handleScreen,
    handleAddScreen,
    handleRemoveScreen,
    mobileS,
    mobileM,
    mobileL,
    tablet,
    laptop,
    laptopL,
    screen2K
  ] = useScreen()

  useEffect(() => {
    handleScreen()

    handleAddScreen()

    return () => handleRemoveScreen()
  }, [])

  if ((mobileS) || (mobileM) || (mobileL) || (tablet) === true) {
    return < NavMobile />
  }

  if ((laptop) || (laptopL) || (screen2K) === true) {
    return < NavDesktop />
  }

  return <></>
}

export default Header
