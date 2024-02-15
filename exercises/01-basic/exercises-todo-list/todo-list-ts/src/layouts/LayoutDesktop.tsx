
// Menus
import DesktopMenu from "../views/menus/desktop-menu/DesktopMenu"

export default function LayoutDesktop({ children }:{ children: React.ReactNode}) {
    return(
        <>
            <div>
                <h2>Layout Desktop</h2>
            </div>

            <main>
                <DesktopMenu/>
                {children}
            </main>
            
        </>
    )
}