import React,{useState} from 'react'
import style from '../../style/bottomSheet.module.css'
import {FcGlobe} from 'react-icons/fc'

function StartRoom(props) {
    const [room , setRoom] =  useState("open")

  return (
      <>
        <div className={style.switch_Line}></div>
        <div className="text-right" style={{textAlign:"right"}}>
            <button className={style.addTopicBtn}>+ Add a topic</button>
        </div>
        <div className={style.selectRoom}>
            <button className={room==='open'?style.active:""} onClick={()=>setRoom("open")}>
                <div>
                    <FcGlobe></FcGlobe>
                </div>
                Open
            </button>
            <button className={room=== "social" ? style.active : ""} onClick={()=>setRoom("social")}>
                <div>
                    <FcGlobe></FcGlobe>
                </div>
                Social
            </button>
            <button className={room=== "closed" ? style.active : ""} onClick={()=>setRoom("closed")}>
                <div>
                    <FcGlobe></FcGlobe>
                </div>
                Closed
            </button>
        </div>
        <p>Start a room <span>{room==='closed' ? 'for people I choose':room==='social'?'with people i follow':'open to everyone'}</span> </p>
        <div className="text-center">
            <button className={style.letGoBtn} 
            onClick={()=>{
                props.setSheetCreateRoom(true)
                props.setSheetVisible(true)
            }}>Let's Go</button>
        </div>
      </>
  )
}

export default StartRoom