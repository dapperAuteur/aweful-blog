import React from 'react'

import { Layout } from 'layout'
import { LinkButton, SNSButton } from 'component/Button'

import Streaming from './../components/SegmentLinks/Streaming'

import 'style/index.scss'
import Calendar from '../components/SegmentLinks/Calendar'
import SocialMedia from '../components/SegmentLinks/SocialMedia'
import MusicTidal from '../components/SegmentLinks/MusicTidal'
import { FaCalendar } from 'react-icons/fa'

const Index = props => {
  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          {/*<img
            id="podcast-logo"
            // src="./../images/idNkhtw_yet_podcast_90_ver0001white_text.png"
            src="https://res.cloudinary.com/devdash54321/image/upload/v1559597910/idNkhtw_yet_podcast_90_ver0001white_text.png"
            alt="podcast logo"
          />*/}
          {/* Main Image */}
          <div className="img">
            <div className="name">i write code</div>
            <LinkButton to="/">
              <img
                className="img-circle"
                src="https://res.cloudinary.com/devdash54321/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1559658932/IMG_3704_aweful_in_a_hat_inverted.png"
                alt="MainImge"
              />
            </LinkButton>
          </div>
          {/* My Name */}
          <div className="name">aweful: full of life</div>
          {/* Title */}
          <Streaming />
          {/* Title */}
          <Calendar />
          {/* <SNSButton key={'Calendly_button'} to="/meet-with-aweful">
            <FaCalendar size="1.5rem" />
          </SNSButton> */}
          <SocialMedia />
          {/* <MusicTidal /> */}
          {/* Bottom Button */}
          <div className="menu">
            <div className="menuItem">
              <LinkButton to="/posts">All Post</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/category">Category</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/about">About aweful</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
