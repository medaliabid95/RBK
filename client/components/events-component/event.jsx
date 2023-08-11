import React from 'react'
import "./event.css"
export const Event = ({ title, date, photo, desc }) => {
    return (
        <div className='one-event'>
            <div className='event-info'>
                <div className='user-info'>
                    <img src="usericon.png" alt="" />
                    <h3>test</h3>
                </div>
                <div className='event-date'>
                    <img src="dateicon.png" alt="" />
                    <h3>24/12/2099</h3>
                </div>
            </div>
            <h1 className='event-title'>From Packing Packages to Programmer | How Judah M Accelerated His Career Path Into Tech</h1>
            <div className='event-paragraph truncate'>Disclaimer: Coding Dojo cannot guarantee employment, 
            salary, or career advancement. The experience of this alumnus/alumna may not be representative of all students.
             Pre-Dojo: Worked in a UPS warehouse and did...Disclaimer: Coding Dojo cannot guarantee employment, salary, or career advancement.
              The experience of this alumnus/alumna may not be representative of all students. Pre-Dojo: Worked in a UPS warehouse and did...
              Disclaimer: Coding Dojo cannot guarantee employment, salary, or career advancement. The experience of this alumnus/alumna may not
               be representative of all students. Pre-Dojo: Worked in a UPS warehouse and did</div>
            <button className='read-more'>read more</button>
            <img className='event-img' src="0.jpg" alt="" />
            <div className='line-after'></div>
        </div>
    )
}
