import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { DefaultButton, TagButton } from 'component/Button'
import { Layout } from 'layout'

import 'style/post.scss'

const About = props => {
  console.log('props', props)
  const { data } = props
  const { html, id, frontmatter } = data.markdownRemark
  const { title, date, tags } = frontmatter

  return (
    <Layout {...props}>
      <div key={id}>
        {/* AboutMe Head */}
        <Helmet title={`Blog - ${title}`} />

        <article className="blog-post">
          {/* Title */}
          <h1 className="title">{title}</h1>
          {/* Date */}
          <h2 className="date">{date}</h2>
          {/* Back Button */}
          <div className="backBtn">
            <DefaultButton to={'/posts'}>{'Back'}</DefaultButton>
          </div>
          {/* Contents */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* Post Tags */}
          <TagButton list={tags || []} />
        </article>
      </div>
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        tags
        title
      }
    }
  }
`

export default About
