import React, { useEffect } from 'react'

import { Layout } from 'layout'

import 'style/index.scss'
import 'style/calendar.scss'

function cal(props) {
  useEffect(() => {
    return () => {
      const head = document.querySelector('head')
      const script = document.createElement('script')
      script.setAttribute(
        'src',
        'https://assets.calendly.com/assets/external/widget.js'
      )
      head.appendChild(script)
    }
  })
  return (
    <Layout {...props}>
      <div>
        <div id="schedule_form">
          <div
            data-url="https://calendly.com/iwritecode"
            className="calendly-inline-widget calendar"
          />
        </div>
      </div>
    </Layout>
  )
  // }
}

export default cal
