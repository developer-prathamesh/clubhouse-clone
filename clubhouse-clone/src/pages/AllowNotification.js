import React from 'react'
import style from '../style/PhoneConfirm.module.css'
import { Link } from 'react-router-dom'


function AllowNotification() {
  return (
    <div className={style.PhoneConfirmContainer}>
        <div className="text-center main">
            <h2 className='mb-3'>Last, Important step!</h2>
            <h2 className='mb-3'>Enable  notifications to know when people are talking</h2>
            <div className={style.notificationContainer}>
                <div className="p-3 ">
                    <h3>"Clubhouse would like to send you notifications"</h3>
                    <p>Notification smay incuse alerts , sounds and icon badges</p>
                </div>
                <div className={style.action_btn}>
                    <Link exact to="/home">
                        Don't Allow
                    </Link>
                    <Link exact to="/home">
                        Allow
                    </Link>
                    {/* <img src="/images/handIcon.svg" className={style.handIcon} alt="" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllowNotification