import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default () => {
  let yt = 'https://www.youtube.com/watch?v=xLTQ9JXsgGk&t=32s'
  let playing = false
  let controls = true
  return (
    <div>
      <ReactPlayer
        url={yt}
        config={{ playing: { playing }, controls: { controls } }}
      />
    </div>
  )
}
