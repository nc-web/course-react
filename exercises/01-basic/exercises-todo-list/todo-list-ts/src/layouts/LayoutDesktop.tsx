
// Menus
import DesktopMenu from "../views/menus/desktop-menu/DesktopMenu"

export default function LayoutDesktop({ children }:{ children: React.ReactNode}) {
    return(
        <>
            <div>
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