import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from 'component/Header'

import 'style/prism-tomorrow.scss'
import 'style/baseLayout.scss'

export class Layout extends React.Component {
  constructor(props) {
    console.log('props', props)
    super(props)

    this.state = {
      navList: [
        {
          path: '/',
          name: 'home',
        },
        {
          path: '/posts',
          name: 'post',
        },
        {
          path: '/articles',
          name: 'article',
        },
        {
          path: '/category',
          name: 'category',
        },
      ],
    }
  }

  render() {
    console.log('this.props', this.props)
    const { location, children } = this.props
    const { navList } = this.state

    return (
      <>
        {/* head custom 진행 */}
        <Helmet
          title="aweful Blog"
          meta={[
            {
              name: 'description',
              content:
                'i write code. i do not know how this works portfolio && blog for software developer growth',
            },
            {
              name: 'keywords',
              content:
                'aweful, blog, software, software developer, art, blockchain, freelance, entrepreneur',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        >
          aweful Blog
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
          />
          <html lang="en" />
        </Helmet>

        {location.pathname !== '/' && (
          <Header location={location} navList={navList} />
        )}

        <div className="blog-posts-container">{children}</div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query NavQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
          }
        }
      }
    }
  }
`
