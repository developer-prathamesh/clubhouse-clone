import React from 'react'
import style from '../style/explore.module.css'
import { DownOutlined, FireOutlined } from '@ant-design/icons'
import {Input} from 'antd'
import data from '../data/Explore.json'
import SubHeader from '../components/SubHeader'


function Explore() {

    const { people, conversation } = data;
    return (
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="Explore"></SubHeader>
                <Input style={{backgroundColor:"#f4f4f4",borderRadius:"0.8em",padding:"0.3em 1em",border:"none",boxShadow:"none"}} size="large" placeholder='Find Prople and Clubs' prefix={<img src= "images/search.png" width="15px" />}>

                </Input>
            </div>
            <h6>People To Follow</h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src="/images/user-img.jpg" alt="" />
                            <div className='ml-2'>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>

                    </div>
                ))}
                <button className={style.showMore}>
                    Show More People <DownOutlined></DownOutlined>
                </button>
            </div>
            <h6>FIND CONVERSATIONS ABOUT...</h6>
            <div className='row mx-0' >
                {conversation.map((item) => (
                    <div className='col-6 px-2 mb-3'>
                        <div className={style.converstaionCard}>
                            <h6>
                                <FireOutlined></FireOutlined>
                                {item.title}
                            </h6>
                            <p>
                                {item.discription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore