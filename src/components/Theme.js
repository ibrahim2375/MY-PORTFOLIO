import React from 'react'
import '../css/theme.css'
import Brightness6Icon from '@mui/icons-material/Brightness6';
function Theme() {

  return (
    <div className='theme'>
          <Brightness6Icon sx={{ color: '#f7740c'}} className="icon-change-color" />
    </div>
  )
}

export default Theme