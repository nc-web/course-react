
import { useEffect } from 'react'

// Hooks
import useScreen from '../../assets/hooks/useScreen'

// Views
import SectionHeaderDesktop from './SectionHeaderDesktop'
import SectionHeaderMobile from './SectionHeaderMobile'
import SectionHeaderTL from './SectionHeaderTabletLaptop'

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

  if ((mobileS) || (mobileM) || (mobileL) === true) {
    return <SectionHeaderMobile />
  }

  if ((tablet) || (laptop) === true) {
    return <SectionHeaderTL />
  }

  if ((laptopL) || (screen2K) === true) {
    return <SectionHeaderDesktop />
  }

  return <></>
}

export default Header
