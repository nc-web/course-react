
import {} from 'react'
import Icon from '@mdi/react'

// Styles
import './css/card-call-01.css'

// Icons
import { mdiPhone, mdiPhoneHangup, mdiEmail } from '@mdi/js'

// Image
import ImageProfile from '/img/capitan-america.webp'

const Card01 = () => {
  return (
    <>
        <div className="card">
            <div className="card__header">
                <img src={ImageProfile} alt="" className="card__header_img" />
            </div>
            <div className="card__body">
                <h3 className="card__body_title">Card Call 01</h3>
                <p className="card__body_subtitle">Lorem, ipsum.</p>
            </div>
            <div className="card__footer">
                <button className="card__footer_button01">
                    <Icon path={mdiPhone} size='2rem' color='#FFFFFF' />
                </button>
                <Icon className="card__footer_icon" path={mdiEmail} size='2rem' color='#BDBDBD'></Icon>
                <button className="card__footer_button02" >
                    <Icon path={mdiPhone} size='2rem' color='#FFFFFF' />
                </button>
            </div>
        </div>
    </>
  )
}

export default Card01