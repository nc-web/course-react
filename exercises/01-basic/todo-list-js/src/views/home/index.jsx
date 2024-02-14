
import { useEffect } from 'react'

// Hooks
import useScreen from '@assets/hooks/screens/useScreen'

// Views
import HomeDesktop from './HomeDesktop'
import HomeMobile from './HomeMobile'

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
    return < HomeMobile />
  }

  if ((laptop) || (laptopL) || (screen2K) === true) {
    return < HomeDesktop />
  }

  return <></>
}

export default Header
