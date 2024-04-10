
// Styles
import styles from './HomeDesktop.module.css'

// Layout
import LayoutDesktop from "../../layouts/LayoutMainDesktop"

// Cards
import Card01 from './cards/Card01'
import Card02 from './cards/Card02'
import Card03 from './cards/Card03'

export default function HomeDesktop() {

    return(
        <LayoutDesktop>
            <section className={styles.section}>
                <div className={styles.section__header}>
                    <h2>TODO LIST'S - REACT TYPESCRIPT </h2>
                </div>

                <div className={styles.cads}>
                    <Card01/>
                    <Card02/>
                    <Card03/>
                </div>
            </section>
            
        </LayoutDesktop>
    )

}