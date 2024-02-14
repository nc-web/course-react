
import { useEffect } from 'react'

// Hooks
import useScreen from '../../assets/hooks/useScreen'

// Views
import SectionHeaderDesktop from './SectionGradientDesktop'
import SectionHeaderMobile from './SectionGradientMobile'

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
    handleAddScreen()

    return () => handleRemoveScreen()
  }, [handleScreen])

  if ((mobileS) || (mobileM) || (mobileL) || (tablet) || (laptop) === true) {
    return <SectionHeaderMobile />
  }

  if ((laptopL) || (screen2K) === true) {
    return <SectionHeaderDesktop />
  }

  return <></>
}

export default Header
