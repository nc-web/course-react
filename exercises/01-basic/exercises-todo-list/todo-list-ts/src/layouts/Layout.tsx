
// Layouts
import LayoutDesktop from './LayoutDesktop'
import LayoutMobile from './LayoutMobile'


const Layout = () => {

    if ( window.innerWidth <= 425 ) {
        return <LayoutMobile/>
    }
    
    if ( window.innerWidth > 425 ) {
        return <LayoutDesktop/>
    }
    
}

export default Layout