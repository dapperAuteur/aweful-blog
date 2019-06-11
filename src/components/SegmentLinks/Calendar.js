import React from 'react'
import { FaCalendar } from 'react-icons/fa'

import { SNSButton } from 'component/Button'
import './../../style/index.scss'

const Calendar = props => {
  return (
    <div className="segment">
      <div className="title">Meet || Code w/ aweful</div>
      <div className="sns">
        <SNSButton key={'Calendly_button'} to="https://calendly.com/iwritecode">
          <FaCalendar size="1.5rem" />
        </SNSButton>
      </div>
    </div>
  )
}

export default Calendar
