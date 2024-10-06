import React from 'react'
import "./Setting.css"
const Setting = ({setting,toggleSetting}) => {
  return (
      <div className={`setting-container ${setting ? "active" : ""}`}>
          <div onClick={toggleSetting}>X</div>
          <div className='setting-box'>asdasd</div>
      </div>
  )
}

export default Setting