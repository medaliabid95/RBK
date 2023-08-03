import React from 'react'
import "./button.css"
const button = ({ label }) => {
    return (
        <div className='border-btn ss'>
            <div className='text-btn ss' >{label}</div>
        </div>
    )
}

export default button