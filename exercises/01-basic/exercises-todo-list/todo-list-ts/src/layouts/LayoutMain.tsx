
// Layouts
import LayoutMainDesktop from './LayoutMainDesktop'
import LayoutMainMobile from './LayoutMainMobile'


const LayoutMain = () => {

    if ( window.innerWidth <= 425 ) {
        return <LayoutMainMobile/>
    }
    
    if ( window.innerWidth > 425 ) {
        return <LayoutMainDesktop/>
    }
    
}

export default LayoutMain