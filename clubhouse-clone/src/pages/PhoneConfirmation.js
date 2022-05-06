import React,{useState} from 'react'
import style from '../style/PhoneConfirm.module.css'
// import {Link} from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'

export default function PageConfirmation() {
    const [value,setValue] = useState()
  return (
    <div className={style.PhoneConfirmContainer}>
    <Link exact="true" to="/" className={style.backBtn}>
      <img src="/images/arrow.png" alt="" />
    </Link>

    <h2>Enter Your Phone</h2>
    <PhoneInput international defaultCountry='IN' value={value} onChange={setValue}></PhoneInput>
    <p>By entering your number, you are agreeing to our <span> Terms of Services and Privacy Policy.</span>
    Thanks! 
    </p>
    <Link exact="true" to='/code_confirm' className='primaryBtn d-flex align-items-center'>Next <img src="/images/nextArrowIcon.svg" className='ml-1' alt="" /> </Link>
    </div>
  )
}
