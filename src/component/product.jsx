import React from 'react'
import {Link} from 'react-router-dom';

function product() {
  return (
    <div>
      This is a product <Link to="/" className='underline'>Go to Dashboard</Link>
    </div>
  )
}

export default product
