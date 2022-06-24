import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './RightSide.css'
const RightSide = () => {
  return (
    <div className="Rightside">
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>
        <div>
            <h3>CustomReview</h3>
            <CustomerReview />
            

        </div>
    </div>
  )
}

export default RightSide