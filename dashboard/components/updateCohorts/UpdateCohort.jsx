import React, { useRef } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'

const UpdateCohort = ({cohort,handleInputChange,handleUpdateCohort,id,closeUpdateForm,ref}) => {

  
  return (
<div className="update-popup" ref={ref}>
  <div className="close-popup">
  <AiFillCloseCircle/>
  </div>
      <div className="card">
        <h2>Make Your Change</h2>
        <input
          type="text"
          name="name"
          placeholder="Cohort Name"
          value={cohort.name}
          onChange={handleInputChange}
        />
          
          <select  value={cohort.session} name="session" onChange={handleInputChange} >
            <option value=''>Choisissez une session</option>
            <option value='Session 1'>Session 1</option>
            <option value='Session 2'>Session 2</option>
          </select>
          <select  value={cohort.actuelPhase} name="actuelPhase" onChange={handleInputChange} >
            <option value=''>Phase</option>
            <option value='Bootstrap'>Bootstrap</option>
            <option value='Junior'>Junior</option>
            <option value='Senior'>Senior</option>
          </select>
  
          <input value={cohort.startDate} type="date"  name="start" onChange={handleInputChange}/>
        <button onClick={()=>{
          handleUpdateCohort(id,cohort)
          closeUpdateForm()
          }} >Submit changes</button>
      </div>
    </div>
  )
}

export default UpdateCohort
