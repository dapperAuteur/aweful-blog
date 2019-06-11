import React from 'react'
import { FaGithub, FaTwitter, FaDiscord, FaFacebook } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

import { SNSButton } from 'component/Button'
import './../../style/index.scss'

const SocialMedia = props => {
  return (
    <div className="segment">
      <div className="title">Social Channels for aweful</div>
      <div className="sns">
        <SNSButton
          key={'Discord_button'}
          to="https://discordapp.com/invite/6mdx7xx/"
        >
          <FaDiscord size="1.5rem" />
        </SNSButton>
        <SNSButton key={'Mail_button'} to={'mailto:iwritecodecorp@gmail.com'}>
          <IoIosMail size="1.5rem" />
        </SNSButton>
        <SNSButton key={'Github_button'} to={'https://github.com/dapperAuteur'}>
          <FaGithub size="1.5rem" />
        </SNSButton>
        <SNSButton key={'Twitter_button'} to="https://twitter.com/awefulBrown/">
          <FaTwitter size="1.5rem" />
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

export default SocialMedia
