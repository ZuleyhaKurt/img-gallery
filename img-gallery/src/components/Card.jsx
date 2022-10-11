import React from 'react'

const Card = ({item}) => {
   
    const { photographer ,src: { large } } = item
    // console.log(large)
   
  return (
      
          <div className='card'>
              <a href={large}><img src={large} alt="" /></a>
              <a  className='name'  href={large} target="true" rel='noopener noreferrer'>{photographer}</a>
        </div>
      
  )
}

export default Card