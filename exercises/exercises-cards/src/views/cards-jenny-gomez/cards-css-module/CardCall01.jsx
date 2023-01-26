
import {} from 'react'
import Icon from '@mdi/react'

// Styles
import './css/card-call-01.module.css'

// Icons
import { mdiPhone, mdiEmail, mdiPhoneHangup } from '@mdi/js'

// Img
import Bob from '/img/bob.webp'

const Card01 = () => {
  return (
    <>
       <div className="card">
        <div className="card__header">
          <img src={Bob} alt="" className="card__header_img" />

        </div>

        <div className="card__body">
            <h3 className="card__body_title"> CardCall01 </h3>
            <p className="card__body_subtitle"> Bob </p>
        </div>

        <div className="card__footer">
            <button className="card__footer_button01"> <Icon path={mdiPhone} size='2rem' color='#FFFF'/> </button>
            <Icon className="card__footer_icon" path={mdiEmail} size='2rem' color='#455A64'> </Icon>
            <button className="card__footer_button02"><Icon path={ mdiPhoneHangup } size='2rem' color='#FFFF'/> </button>
        </div>
       </div>
    </>
  )
}

export default Card01
