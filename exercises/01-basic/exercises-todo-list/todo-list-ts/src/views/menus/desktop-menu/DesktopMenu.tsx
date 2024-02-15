
// Styles
import styles from './DesktopMenu.module.css'

export default function DesktopMenu() {

    return(
            <div className={styles.menu}>
            
                <div className={styles.menu__company}>
                    <h4 className={styles.menu__company_tile}>Todo List's Advanced</h4>
                </div>

                <nav className={styles.menu__nav}>
                    <div className={styles.menu__nav_items}>
                        <div>
                            <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                        </div>
                        <span>HOME</span>
                    </div>

                    <div className={styles.menu__nav_items}>
                        <div>
                        <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                        </div>
                        <span>ABOUT</span>
                    </div>
                </nav>

                <div className={styles.menu__theme}>
                    <div className={styles.menu__nav_items}>
                        <div>
                            <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>brightness-6</title><path d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" /></svg>
                        </div>
                        <span>DARK</span>
                    </div>

                    <div className={styles.menu__nav_items}>
                        <div>
                            <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunny</title><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" /></svg>
                        </div>
                        <span>LIGHT</span>
                    </div>
                </div>

            </div>
        
    )
    
}