import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import {Link} from 'react-router-dom'
import {BsAt, BsPlus, BsUpload} from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'


function Profile() {
  return (
    <>
        <div className={style.profileContainer}>
            <div className={exploreStyle.header}>
                <div className={`${exploreStyle.head} ${style.head} text-right mb-0`}>
                    <Link to="/home">
                        <img src="/images/arrow.png" className={exploreStyle.arrowIcon} alt="" />
                    </Link>
                    <div className={style.actionBtn}>
                        <BsAt></BsAt>
                        <BsUpload></BsUpload>
                        <AiOutlineSetting></AiOutlineSetting>
                    </div>
                </div>
            </div>
            <img src="/images/user-img.jpg" className={style.profile_img} alt="" />
            <h4>Prathamesh Kulkarni</h4>
            <p>@prathameshkulkarni</p>
            <div className={style.follow}>
                <p>
                    <span>0</span> followers
                </p>
                <p><span>51</span> following </p>
            </div>
            <button>Add a Bio</button>
            <div className='mb-4'>
                <button className='mb-0'>
                    <AiOutlineTwitter></AiOutlineTwitter> Add Twitter
                </button>
                <button className='mb-0'>
                    <AiOutlineInstagram></AiOutlineInstagram> Add Instagram
                </button>
            </div>
            <div className={style.nominated}>
                <img src="/images/user-img.jpg" alt="" />
                <div>
                    <p>Joined 14-July-2022</p>
                    <p>Nominated by <span>Leo</span></p>
                </div>
            </div>
            <p>member of </p>
            <button className={style.addMemberBtn}>
                <BsPlus></BsPlus>
            </button>
        </div>
    </>
  )
}

export default Profile