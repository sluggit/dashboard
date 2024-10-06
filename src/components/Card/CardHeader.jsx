import React from 'react'
import OptionButton from '../OptionButton/OptionButton'

const CardHeader = ({title,subText,image,option,children}) => {
  return (
    <div className='cardheader-container'>
      <section id="cardheader-content">
      {image ? 
           <div className='cardheader-img-container'>
             <img src={image} alt="" />      
          </div> : null}
         <div>
             <div className='cardheader-title'>{title }</div>   
             <p className='cardheader-subtext'>{subText}</p>
       </div>   
      </section> 
      {option ?
        <OptionButton>
          {children}
      </OptionButton>
        : null}
   </div>
  )
}

export default CardHeader