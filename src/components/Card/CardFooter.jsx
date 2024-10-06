import React from 'react'

const CardFooter = ({children}) => {
  return (
      <div className='cardfooter-container' onClick={ (e) => {e.preventDefault()}}>
          {children}
    </div>
  )
}

export default CardFooter