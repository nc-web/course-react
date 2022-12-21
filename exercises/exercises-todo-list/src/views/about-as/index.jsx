
import { useEffect } from 'react'

// Hooks
import useScreen from '@assets/hooks/screens/useScreen'

// Views
import AboutDesktop from './AboutDesktop'
import AboutMobile from './AboutMobile'

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
    screen2K,
    screen4K,
    screen8K
  ] = useScreen()

  useEffect(() => {
    handleScreen()

    handleAddScreen()

    return () => handleRemoveScreen()
  }, [])

  if ((mobileS) || (mobileM) || (mobileL) || (tablet) === true) {
    return < AboutMobile />
  }

  if ((laptop) || (laptopL) || (screen2K) === true) {
    return < AboutDesktop />
  }

  return <></>
}

export default Header
