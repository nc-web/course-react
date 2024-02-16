
// Menus
import DesktopMainMenu from "../views/menus/main-menu/DesktopMainMenu"
import ThemeMenu from '../views/menus/theme-menu/ThemeMenu'

export default function LayoutMainDesktop({ children }:{ children: React.ReactNode}) {
    return(
        <>
            <div>
                <ThemeMenu/>
                <DesktopMainMenu/>
            </div>

            <main>
                {children}
            </main>

            <footer>
                <small>Newsoft Computer</small>
            </footer>
            
        </>
    )
}