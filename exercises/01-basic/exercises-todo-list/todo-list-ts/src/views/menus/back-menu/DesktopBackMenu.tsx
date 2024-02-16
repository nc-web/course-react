
// Links
import { Link } from 'react-router-dom'

// Styles
import styles from './DesktopBackMenu.module.css'

export default function DesktopBackMenu() {

    return(
        <div className={styles.menu}>

            <Link to='/' className={styles.link}>
                <div className={styles.menu__company}>
                    <div>
                        <svg className={styles.menu__company_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted-square</title><path d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" /></svg>
                    </div>
                    <h3 className={styles.menu__company_tile}>TODO LIST'S - TS </h3>
                </div>
            </Link>

            <nav className={styles.menu__nav}>
                
                <Link to='/' className={styles.link}>
                    <div className={styles.menu__nav_items}>
                        <div>
                            <svg className={styles.menu__nav_items_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>backspace</title><path d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" /></svg>
                        </div>
                        <small>BACK</small>
                    </div>
                </Link>
                
            </nav>

        </div>
        
    )
    
}