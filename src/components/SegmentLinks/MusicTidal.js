import React from 'react'
import './../../style/index.scss'

const MusicTidal = props => {
  return (
    <div className="segment">
      <div className="title">Music</div>
      <div className="sns">
        <iframe
          width="100%"
          height="150"
          src="https://song.link/embed?url=https://song.link/i/1021964479"
          frameborder="0"
          allowfullscreen="true"
        />
      </div>
    </div>
  )
}

export default MusicTidal
