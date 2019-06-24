import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'layout'

import 'style/posts.scss'
import 'style/post.scss'
import { node } from 'prop-types'
import GatsbyLink from 'gatsby/node_modules/gatsby-link'

export default function YouTubePosts(props) {
  // console.log('props', props)
  const { data } = props
  // console.log('data', data)
  const { nodes } = data.allYoutubeVideo
  // console.log('nodes', nodes)

  return (
    <Layout {...props}>
      <div className="blog-posts">
        <h1>YouTubePosts</h1>
        {nodes.map((node, key = `${node.id}`) => {
          console.log('node', node)
          return (
            <div className="blog-post-preview" key={node.id}>
              <div className="blog-container">
                <p className="title">{node.title}</p>
              </div>
              <div className="blog-container">
                <div className="blog-sub-container">
                  <img
                    src={`${node.thumbnail.url}`}
                    alt="YouTube Thumbnail"
                    className="img-circle"
                  />
                  <p className="summary">{node.description.slice(0, 200)}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const youtubeListQuery = graphql`
  query youTubeListQuery {
    allYoutubeVideo {
      totalCount
      nodes {
        id
        title
        description
        thumbnail {
          url
          width
          height
        }
      }
    }
  }
`
