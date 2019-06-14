import React from 'react'

import { Layout } from 'layout'
import 'style/index.scss'
import 'style/calendar.scss'

const Calendar = props => {
  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          <h1>Calendar</h1>
          {/* <!-- Calendly inline widget begin --> */}
          <div
            className="calendly-inline-widget calendar"
            data-url="https://calendly.com/iwritecode"
          />
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
          />
          {/* <!-- Calendly inline widget end --> */}
        </div>
      </div>
    </Layout>
  )
}

export default Calendar
