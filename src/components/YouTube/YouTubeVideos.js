import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'layout'
import { LinkButton } from 'component/Button'

const YouTubeVideos = props => {
  console.log('props', props)
  return (
    <div>
      <h1>YouTubeVideos</h1>
    </div>
  )
}

// export const youtubeListQuery = graphql`
//   query youTubeListQuery {
//     allYoutubeVideo {
//       totalCount
//       nodes {
//         id
//         title
//       }
//     }
//   }
// `

export default YouTubeVideos
