

import DesktopBackMenu from "views/menus/back-menu/DesktopBackMenu" from '../../src/views/menus/back-menu/DesktopBackMenu'

export default function LayoutTodoDesktop({children}:{childre: React.ReactNode}) {
    
    return(
        <>
            <div>
                <DesktopBackMenu/>
            </div>

            <section>
                <h2>Layout Todo Desktop</h2>
                {children}
            </section>

            <footer>
                <small>Newsoft Computer</small>
            </footer>
        </>
        
    )

}