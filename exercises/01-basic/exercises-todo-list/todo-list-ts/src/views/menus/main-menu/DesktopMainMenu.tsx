
// Links
import { Link } from 'react-router-dom'

// Styles
import styles from './DesktopMenu.module.css'

export default function DesktopMenu() {

    return(
        <div className={styles.menu}>

            <Link to='/'>
                <div className={styles.menu__company}>
                    <div>
                        <svg className={styles.menu__company_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted-square</title><path d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" /></svg>
                    </div>
                    <h3 className={styles.menu__company_tile}>TODO LIST'S - TS </h3>
                </div>
            </Link>

            <nav className={styles.menu__nav}>
                
                <Link to='/'>
                    <div className={styles.menu__nav_items}>
                        <div>
                            <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                        </div>
                        <span>HOME</span>
                    </div>
                </Link>
                

                <Link to='/about'>
                    <div className={styles.menu__nav_items}>
                        <div>
                            <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information</title><path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                        </div>
                        <span>ABOUT</span>
                    </div>
                </Link>
                
            </nav>

        </div>
        
    )
    
}