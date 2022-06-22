import React from 'react'

import StaffLogo from './StaffLogo'
import "./staff.css"
import StaffSlibar from '../staffslidebar/StaffSlibar'
const Staff = () => {
  return (
    <div className='staff'>
        <StaffLogo/>
        <StaffSlibar/>
    </div>
  )
}

export default Staff