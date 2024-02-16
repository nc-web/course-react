
// Layouts
import HomeDesktop from './HomeDesktop'
import HomeMobile from './HomeMobile'


const Layout = () => {

    if ( window.innerWidth <= 425 ) {
        return <HomeMobile/>
    }
    
    if ( window.innerWidth > 425 ) {
        return <HomeDesktop/>
    }
    
}

export default Layout