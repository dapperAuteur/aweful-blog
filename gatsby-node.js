const path = require('path')

const PostTemplate = path.resolve(`src/components/Post.jsx`)
const TagTemplate = path.resolve(`src/pages/category.jsx`)

// Setting Post per page
const postsPerPage = 5

/**
 * @author sseon
 * @param actons : function
 * @param graphql : function
 * @summary Create Pages
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 20)
            html
            id
            timeToRead
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              path
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    // console.log('result', result)
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // const youTubePosts = result.data.allYoutubeVideo.nodes

    // Create Tag Page
    createTagPages(createPage, posts)

    // Create Post Page
    createPostPages(createPage, graphql)
    // Create Article Page
    createArticlePages(createPage, graphql)

    // createYouTubePages(createPage, graphql, youTubePosts)

    return posts
  })
}

/**
 * @author aweful
 * @param actions : function
 * @param graphql : function
 * @summary Create YouTube Pages
 */

const createYouTubePostPages = props => {
  const { actions, graphql } = props
  // console.log('gatsby-node props', props)
  // console.log('gatsby-node actions', actions)
  // console.log('gatsby-node graphql', graphql)
  return graphql(`
    allYoutubeVideo {
      edges {
        node {
          id
          title
          description
          channelTitle
          thumbnail
        }
      }
    }
  `).then(result => {
    // console.log('result', result)
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const youTubeVids = result.data.allMarkdownRemark.edges

    // Create YouTube Tag Page
    createYouTubeTagPages(createPage, youTubeVids)

    createYouTubePages(createPage, graphql)

    // createArticlePages(createPage, graphql);
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param graphql : graphql function
 * @summary Create Post Page
 */
const createPostPages = (createPage, graphql) => {
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            html
            id
            timeToRead
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              path
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    CreateCommonPage(createPage, posts, `posts`)

    return posts
  })
}

/**
 * @author aweful
 * @param createPage : function
 * @param graphql : graphql function
 * @summary Create YouTube Page
 */

const createYouTubePages = (createPage, graphql, youTubePosts) => {
  return graphql(`
    allYoutubeVideo(sort: {order: ASC, fields: [publishedAt]}
      ) {
        edges {
          node {
            id
            title
            description
            videoId
            publishedAt
            privacyStatus
            channelTitle
            
          }
        }
      }
   `).then(result => {
    // console.log('youTubePosts', youTubePosts)
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // const youTubeVs = result.data.allYoutubeVideo.edges
    CreateCommonPage(createPage, youTubePosts, `posts`)

    return youTubePosts
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param graphql : graphql function
 * @summary Create Article Page
 */
const createArticlePages = (createPage, graphql) => {
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "article" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            html
            id
            timeToRead
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              path
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    CreateCommonPage(createPage, posts, `articles`)

    return posts
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param edges : tag list
 * @summary Create Tag Page
 */
const createTagPages = (createPage, edges) => {
  const posts = {}

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        // console.log('tag', tag)
        if (!posts[tag]) {
          posts[tag] = []
        }
        posts[tag].push(node)
      })
    }
  })

  createPage({
    path: '/category',
    component: TagTemplate,
    context: {
      posts,
    },
  })

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName]

    createPage({
      path: `/category/${tagName}`,
      component: TagTemplate,
      context: {
        posts,
        post,
        tag: tagName,
      },
    })
  })
}

/**
 * @author aweful
 * @param createPage : function
 * @param edges : tag list
 * @summary Create YouTube Tag Page
 */

const createYouTubeTagPages = (createPage, edges) => {
  const youTubePosts = {}
  // youTubePosts[tag].push('youTube')

  edges.forEach(({ node }) => {
    // console.log('node', node)
    if (node.channelTitle) {
      node.forEach
    }
  })

  createPage({
    path: '/category',
    component: TagTemplate,
    context: {
      posts: youTubePosts,
    },
  })

  Object.keys(youTubePosts).forEach(tagName => {
    const youTubePost = youTubePosts[tagName]

    createPage({
      path: `/category/${tagName}`,
      component: TagTemplate,
      context: {
        posts: youTubePosts,
        post: youTubePost,
        tag: tagName,
      },
    })
  })
}

/**
 * @author sseon
 * @param createPage : function
 * @param posts : post list
 * @param pageName : page name
 * @summary Create Page and Page List
 */
const CreateCommonPage = (createPage, posts, pageName) => {
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Create article-list pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${pageName}` : `/${pageName}/${i + 1}`,
      component: path.resolve(`src/pages/${pageName}.jsx`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        prev: i === 1 ? '' : i,
        next: i + 2,
        numPages,
      },
    })
  })

  // Create pages for each markdown file.
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: node.frontmatter.path,
      component: PostTemplate,
      context: {
        prev,
        next,
      },
    })
  })
}
