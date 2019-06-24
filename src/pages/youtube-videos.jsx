import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const youtubeVideos = props => {
  console.log('props', props)
  return (
    <div>
      <h1>YouTube</h1>
    </div>
  )
}

youtubeVideos.propTypes = {}

export const youtubeListQuery = graphql`
  query {
    {
      allYoutubeVideo {
        edges {
          node {
            id
            title
            description
            thumbnail {
              url
              width
              height
            }
            localThumbnail {
              id
            }
            videoId
            publishedAt
            privacyStatus
            channelTitle
          }
        }
      }
    }
  }
`

export default youtubeVideos
