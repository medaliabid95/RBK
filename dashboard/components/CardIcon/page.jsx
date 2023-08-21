import React from 'react'

function CardIcon({ icon, label, count }) {
  return (
    <div className='card-icon'>
      <img src={icon} alt="" />
      <span>{label}</span>
      <span id="visits">{count}</span>
    </div>
  )
}

export default CardIcon


