
// Styles
import styles from './HomeDesktop.module.css'

// Layout
import LayoutDesktop from "../../layouts/LayoutMainDesktop"

// Cards
import Card01 from './cards/Card01'

export default function HomeDesktop() {

    return(
        <LayoutDesktop>
            <section className={styles.section}>
                <div className={styles.section__header}>
                    <h2>TODO LIST'S - REACT TYPESCRIPT </h2>
                </div>

                <div className={styles.cads}>
                    <Card01/>
                    <Card01/>
                </div>
            </section>
            
        </LayoutDesktop>
    )

}