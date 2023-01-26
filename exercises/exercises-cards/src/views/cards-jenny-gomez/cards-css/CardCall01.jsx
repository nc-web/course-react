
import {} from 'react'
import Icon from '@mdi/react'

// Styles
import styles from './css/card-call-01.css'

// Icons
import { mdiPhone, mdiEmail, mdiPhoneHangup } from '@mdi/js'

// Img
import Bob from '/img/bob.webp'

const Card01 = () => {
  return (
    <>
       <div className={styles.card}>
        <div className={styles.card__header}>
          <img src={Bob} alt="" className={styles.card__header_img} />

        </div>

        <div className={styles.card__body}>
            <h3 className={styles.card__body_title}> CardCall01 </h3>
            <p className={styles.card__body_subtitle}> Bob </p>
        </div>

        <div className={styles.card__footer}>
            <button className={styles.card__footer_button01}> <Icon path={mdiPhone} size='2rem' color='#FFFF'/> </button>
            <Icon className={styles.card__footer_icon} path={mdiEmail} size='2rem' color='#455A64'> </Icon>
            <button className={styles.card__footer_button02}><Icon path={ mdiPhoneHangup } size='2rem' color='#FFFF'/> </button>
        </div>
       </div>
    </>
  )
}

export default Card01
