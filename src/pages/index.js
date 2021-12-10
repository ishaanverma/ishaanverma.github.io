import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Hi, I'm Ishaan">
      <p>I'm a master's student currently pursuing Computer Science at USC.</p>
      <p>This is my blog.</p>
      <h2>All Posts</h2>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <h3>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p>{node.frontmatter.date}</p>
          </div>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage
