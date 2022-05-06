import React from 'react'
import style from '../style/Welcome.module.css'
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1> 
        <div className={style.WelcomeInfo}>
            <p>
                We're working hard to get clubhouse app ready for everyone! While we wrap up the finishing touches, we're adding people gradually.
            </p>
            <p>
                Anyone can join with an invite from an existing user or reserve your username and we'll text you if you have friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!   
            </p>
            <p>Paul, Rohan & the Clubhouse Team.</p>
        </div>
        <div className={style.actionBtn}>
            <Link exact="true" to='/invite' className='primaryBtn d-flex align-items-center mb-3' style={{textDecoration:"none"}}>
                Get your username{" "}
                {/* <img src="" alt="" /> */}
                
            </Link>
            <Link exact="true" to="/" style={{textDecoration:"none"}}>
                Have an invite text? Sign In
            </Link>
        </div>
    </div>
    
  )
}
