import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaTwitch,
  FaDiscord,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

import { Layout } from 'layout'
import { SNSButton, LinkButton } from 'component/Button'

import 'style/index.scss'

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
            <LinkButton to="/">
              <img
                className="img-circle"
                src="https://res.cloudinary.com/devdash54321/image/upload/v1559658932/IMG_3704_aweful_in_a_hat_inverted.png"
                alt="MainImge"
              />
            </LinkButton>
          </div>
          {/* My Name */}
          <div className="name">aweful: full of life</div>
          {/* Title */}
          <div className="title">Streaming Channels for aweful</div>
          {/* SNS Buttons */}
          <div className="sns">
            <SNSButton
              key={'Mail_button'}
              to={'mailto:iwritecodecorp@gmail.com'}
            >
              <IoIosMail size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'Github_button'}
              to={'https://github.com/dapperAuteur'}
            >
              <FaGithub size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'Twitter_button'}
              to={'http://bit.ly/twitter_aweful/'}
            >
              <FaTwitter size="1.5rem" />
            </SNSButton>
            <SNSButton key={'Facebook_button'} to={'bit.ly/brand_am_fb/'}>
              <FaFacebook size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'Twitch_button'}
              to={'http://bit.ly/twitch_awefulbrown/'}
            >
              <FaTwitch size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'YouTube_button'}
              to={'http://bit.ly/youtube_awefulbrown/'}
            >
              <FaYoutube size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'Discord_button'}
              to={'http://bit.ly/aweful_discord/'}
            >
              <FaDiscord size="1.5rem" />
            </SNSButton>
          </div>

          {/* Bottom Button */}
          {/*<div className="menu">
            <div className="menuItem">
              <LinkButton to="/posts">All Post</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/category">Category</LinkButton>
            </div>
        </div>*/}
        </div>
      </div>
    </Layout>
  )
}

export default Index
