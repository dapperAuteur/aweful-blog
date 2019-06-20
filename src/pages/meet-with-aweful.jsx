import React, { useEffect } from 'react'

import { Layout } from 'layout'
import 'style/index.scss'
import 'style/calendar.scss'

const MeetWithMe = props => {
  let calendar = () => {
    return (
      <div className="bContainer">
        <div className="bCard">
          <h1>Meet With aweful</h1>
          {/* <!-- Calendly inline widget begin --> */}
          <div
            className="calendly-inline-widget calendar"
            data-url="https://calendly.com/iwritecode"
          />
          {/* <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
          /> */}
          <iframe
            src="https://calendly.com/iwritecode"
            width="320px"
            height="580"
          />
          {/* <!-- Calendly inline widget end --> */}
        </div>
      </div>
    )
  }
  useEffect(() => {
    return () => {
      calendar
    }
  }, [calendar])
  return <Layout {...props}>{calendar}</Layout>
}

export default MeetWithMe
