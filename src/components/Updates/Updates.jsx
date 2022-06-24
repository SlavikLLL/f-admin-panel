import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Updates.css'

const Uptades = () => {
  return (
    <div className="Uptades">
      {UpdatesData.map((update)=>{
        return (
          <div className="update">
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{marginBottom:"0.5rem",}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
              
            
          </div>
          
        )
      })}
    </div>
  )
}

export default Uptades