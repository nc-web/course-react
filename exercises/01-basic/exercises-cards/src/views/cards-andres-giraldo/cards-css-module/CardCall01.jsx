
import {} from 'react'
import Icon from '@mdi/react'

// Styles
import styles from './css/card-call-01.module.css'

// Icons
import { mdiPhone, mdiPhoneHangup, mdiEmail } from '@mdi/js'

// Image
import ImageProfile from '/img/capitan-america.webp'

const Card01 = () => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.card__header}>
                <img src={ImageProfile} alt="" className={styles.card__header_img} />
            </div>
            <div className={styles.card__body}>
                <h3 className={styles.card__body_title}>Card Call 01</h3>
                <p className={styles.card__body_subtitle}>Lorem, ipsum.</p>
            </div>
            <div className={styles.card__footer}>
                <button className={styles.card__footer_button01}>
                    <Icon path={mdiPhone} size='2rem' color='#FFFFFF' />
                </button>
                <Icon className={styles.card__footer_icon} path={mdiEmail} size='2rem' color='#BDBDBD'></Icon>
                <button className={styles.card__footer_button02} >
                    <Icon path={mdiPhone} size='2rem' color='#FFFFFF' />
                </button>
            </div>
        </div>
    </>
  )
}

export default Card01