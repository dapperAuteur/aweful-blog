import React, { Component } from 'react'
import ReactPlayer from 'react-player'

let yt = 'https://www.youtube.com/watch?v=xLTQ9JXsgGk&t=32s'
class TwitchEmbed extends Component {
  render() {
    return <ReactPlayer url={yt} playing />
  }
}

export default TwitchEmbed
