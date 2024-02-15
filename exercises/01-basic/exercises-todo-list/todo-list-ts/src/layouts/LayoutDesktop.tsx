
// Menus
import DesktopMenu from "../views/menus/desktop-menu/DesktopMenu"
import ThemeMenu from '../views/menus/theme-menu/ThemeMenu'

export default function LayoutDesktop({ children }:{ children: React.ReactNode}) {
    return(
        <>
            <div>
                <ThemeMenu/>
                <DesktopMenu/>
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