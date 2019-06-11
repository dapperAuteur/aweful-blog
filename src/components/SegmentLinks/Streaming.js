import React from 'react'
import { FaTwitch, FaDiscord, FaFacebook, FaYoutube } from 'react-icons/fa'

import { SNSButton } from 'component/Button'
import './../../style/index.scss'

const Streaming = props => {
  return (
    <div className="segment">
      <div className="title">Streaming Channels for aweful</div>
      {/* SNS Buttons */}
      <div className="sns">
        <SNSButton
          key={'Twitch_button'}
          to="https://www.twitch.tv/awefulbrown/"
        >
          <FaTwitch size="1.5rem" />
        </SNSButton>
        <SNSButton
          key={'YouTube_button'}
          to="https://www.youtube.com/channel/UC2ntycy7pKptbVZQqND03GA/"
        >
          <FaYoutube size="1.5rem" />
        </SNSButton>
        <SNSButton
          key={'Discord_button'}
          to="https://discordapp.com/invite/6mdx7xx/"
        >
          <FaDiscord size="1.5rem" />
        </SNSButton>
        <SNSButton
          key={'Facebook_button'}
          to="https://www.facebook.com/brandanthonymcdonald/"
        >
          <FaFacebook size="1.5rem" />
        </SNSButton>
      </div>
    </div>
  )
}

export default Streaming
