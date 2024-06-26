

import { Link } from 'react-router-dom'

// Styles
import styles from './Card02.module.css'

export default function Card02() {

    return(
        <Link to='/todo-list-02' className={styles.link}>
            <article className={styles.card}>
                <div className={styles.card__header}>
                    <h3 className={styles.card__header_title}>Todo List 02</h3>
                </div>

                <div className={styles.card__body}>
                    <div className={styles.card__body_cont}>
                        <svg className={styles.card__body_cont_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>view-list</title><path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z" /></svg>
                    </div>
                </div>

                <div className={styles.card__footer}>
                    <p>Autor: Andres Giraldo</p>
                </div>
            </article>
        </Link>
        
    )

}