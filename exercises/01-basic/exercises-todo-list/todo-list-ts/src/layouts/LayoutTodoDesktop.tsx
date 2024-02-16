
import DesktopBackMenu from "../views/menus/back-menu/DesktopBackMenu"


export default function LayoutTodoDesktop({children}:{children: React.ReactNode}) {
    
    return(
        <>
            <div>
                <DesktopBackMenu/>
            </div>

            <section>
                {children}
            </section>

            <footer>
                <small>Newsoft Computer</small>
            </footer>
        </>
        
    )

}