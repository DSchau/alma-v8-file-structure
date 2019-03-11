import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
// import H1 from '../components/H1'
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from "@mdx-js/tag"; 
// import Collapsible from 'react-collapsible';
// import slugify from 'react-slugify';
import './article.css'

const MainContent = styled.div`
  grid-column: 2 / 3;
  padding: 1rem 0;
`

// const Content = styled.div`
//   p {
//     /* font-family: sans-serif; */
//     line-height: 1.5;
//     font-size: 18px;
//   }
// `

// const Content = styled(MDXRenderer)`
//   p {
//     /* font-family: sans-serif; */
//     line-height: 1.5;
//     font-size: 22px;
//   }
// `

// const TOC = styled.div`
//   position: fixed;
//   background: lightgrey;
//   margin: 0;
//   padding: 2rem;
//   box-sizing: border-box;
//   font-size: 2rem;
// `

// const components = {
//   h1: props => <h1 id={slugify(props.children)} {...props}/>,
//   h2: props => <h2 id={slugify(props.children)} {...props}/>,
//   h3: props => <h3 id={slugify(props.children)} {...props}/>,
//   h4: props => <h4 id={slugify(props.children)} {...props}/>,
//   h5: props => <h5 id={slugify(props.children)} {...props}/>,
//   h6: props => <h6 id={slugify(props.children)} {...props}/>
// }

// const renderItem = item => (
//   <li key={item.title}>
//     {item.items ? (
//       <ul>
//         <a href={item.url}>{item.title}</a>
//         {item.items.map(renderItem)}
//       </ul>
//     ) : (
//       <a href={item.url}>{item.title}</a>
//     )}
//   </li>
// )

// const renderItem = item => (
//   <li key={item.title}>
//     {item.items ? (
//       <Collapsible trigger={item.title}>
//         <a href={item.url}>{item.title}</a>
//         {item.items.map(renderItem)}
//       </Collapsible>
//     ) : (
//       <a href={item.url}>{item.title}</a>
//     )}
//   </li>
// )

export default ({ data }) => {
  const { frontmatter, code } = data.mdx
  // const { frontmatter, code, tableOfContents } = data.mdx
  return (
    <Fragment>
      <MDXProvider>
      {/* <MDXProvider components={components}> */}
        {/* <TOC>
          {tableOfContents && <ul>{tableOfContents.items.map(renderItem)}</ul>}
        </TOC> */}
        <MainContent>
          <div>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.subtitle}</h2>
            <h3>{frontmatter.date}</h3>
            <MDXRenderer>{code.body}</MDXRenderer>
          </div>
        </MainContent>
      </MDXProvider> 
    </Fragment>
  )
}

export const query = graphql`
  query GetMdxTemplate($slug: String!) {
    mdx(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
      }
      tableOfContents
      code {
        scope
        body
      }
    }
  }
`