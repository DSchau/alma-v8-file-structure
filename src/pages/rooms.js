import React from 'react'
// import { graphql } from 'gatsby'
import CenteredContainer from '../components/styled/CenteredContainer'
import H1 from '../components/styled/H1'

export default ({ data }) => (
  <>
    <CenteredContainer>
      <H1>The Rooms</H1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </CenteredContainer>
  </>
)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `