
import { useEffect } from 'react'

// Hooks
import useScreen from 'components-advanced-nc-styles-old/components/assets/hooks/useScreen'

// Views
import PagesDesktop from './SectionPagesDesktop'
import PagesMobile from './SectionPagesMobile'

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
    return <PagesMobile />
  }

  if ((laptopL) || (screen2K) === true) {
    return <PagesDesktop />
  }

  return <></>
}

export default Header
