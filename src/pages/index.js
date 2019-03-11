import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import FullWidthContainer from '../components/styled/FullWidthContainer'
import CenteredContainer from '../components/styled/CenteredContainer'
import HorizontalScrollContainer from '../components/styled/HorizontalScrollContainer'
// import LTRScrollBox from '../components/LTRScrollBox'
import H1 from '../components/styled/H1'

const FullImg = styled(Img)`
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  z-index: 0;

  @media (min-width: 50rem) {
    height: 100vh;
  }
`

const Card = styled.div`
  flex: 0 0 auto;
  margin: 2rem 1rem;
  padding: 1rem; 
  width: 80%;
  background: white;
  line-height: 1.5;
  font-size: 18px;
  white-space: pre-wrap;
  border-radius: 8px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);

  :first-child {
    margin-left: 2rem;
  }

  :last-child {
    margin-right: 0;
  }

  @media (min-width: 50rem) {
    width: 40%;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  line-height: 1;
`

// const H1 = styled.h1`
//   margin: 1rem;
//   padding: 1rem;
//   text-align: center;
//   text-transform: uppercase;
//   letter-spacing: 16px;
//   color: #AF875D;
//   border-width: 32px;
//   border: 32px solid;
//   border-image: url(${almaBorder}) 32 stretch;
//   font-family: 'Gothic A1', sans-serif;
// `

const P = styled.p`
  margin-top: 1rem;
`

const IndexPage = ({ data }) => (
  <Fragment>
    <FullWidthContainer>
      <FullImg fluid={data.resortOverview.childImageSharp.fluid} />
      {/* <FullImg fluid={data.imageOne.childImageSharp.fluid} /> */}
      {/* <FullImg fluid={data.imageTwo.childImageSharp.fluid} /> */}
      {/* <FullImg fluid={data.imageThree.childImageSharp.fluid} /> */}
    </FullWidthContainer>

    <CenteredContainer>
      <H1>The Resort</H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>

    <FullWidthContainer>
      <HorizontalScrollContainer blue>
        <Card>
          <Img fluid={data.imageOne.childImageSharp.fluid} />
          <P>
            Poop on grasses under the bed bathe private parts with tongue then lick owner's face so i can haz.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageTwo.childImageSharp.fluid} />
          <P>
            Cream at dripper chicory, carajillo milk acerbic java robusta, that ut, irish cultivar.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageThree.childImageSharp.fluid} />
          <P>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageFour.childImageSharp.fluid} />
          <P>
            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
          </P>
        </Card>
        {/* <Card>
         <Img fluid={data.imageFive.childImageSharp.fluid} />
          <P>
            Beef shank ham hock biltong. Beef ribs chuck fatback tail, cupim filet mignon strip steak spare ribs turducken tri-tip short loin.
          </P>
        </Card> */}
      </HorizontalScrollContainer>
    </FullWidthContainer>

    <CenteredContainer>
      <H1>The Rooms</H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>

    <FullWidthContainer>
      <HorizontalScrollContainer orange>
        <Card>
          <Img fluid={data.imageSix.childImageSharp.fluid} />
          <P>
            Poop on grasses under the bed bathe private parts with tongue then lick owner's face so i can haz.
          </P>
        </Card>
        {/* <Card>
          <Img fluid={data.imageSeven.childImageSharp.fluid} />
          <P>
            Cream at dripper chicory, carajillo milk acerbic java robusta, that ut, irish cultivar.
          </P>
        </Card> */}
        <Card>
          <Img fluid={data.imageEight.childImageSharp.fluid} />
          <P>
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageNine.childImageSharp.fluid} />
          <P>
            Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness.
          </P>
        </Card>
        <Card>
         <Img fluid={data.imageFive.childImageSharp.fluid} />
          <P>
            Short ribs bresaola bacon burgdoggen sausage biltong ham. Shankle beef ribs ham ribeye.
          </P>
        </Card>
      </HorizontalScrollContainer>
    </FullWidthContainer>

    <CenteredContainer>
      <H1>The Amenities</H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>

    <FullWidthContainer>
      <HorizontalScrollContainer blue>
        <Card>
          <Img fluid={data.imageOne.childImageSharp.fluid} />
          <P>
            Poop on grasses under the bed bathe private parts with tongue then lick owner's face so i can haz.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageTwo.childImageSharp.fluid} />
          <P>
            Cream at dripper chicory, carajillo milk acerbic java robusta, that ut, irish cultivar.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageThree.childImageSharp.fluid} />
          <P>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
          </P>
        </Card>
        <Card>
          <Img fluid={data.imageFour.childImageSharp.fluid} />
          <P>
            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.
          </P>
        </Card>
        {/* <Card>
         <Img fluid={data.imageFive.childImageSharp.fluid} />
          <P>
            Beef shank ham hock biltong. Beef ribs chuck fatback tail, cupim filet mignon strip steak spare ribs turducken tri-tip short loin.
          </P>
        </Card> */}
      </HorizontalScrollContainer>
    </FullWidthContainer>

    <CenteredContainer>
      <H1>Latest News</H1>
      <div>
        <h4>{data.articles.totalCount} Posts</h4>
        {data.articles.edges.map(({ node }) => (
          <div key={node.id}>
            <NavLink to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <h4>{node.frontmatter.subtitle}</h4>
              <P>{node.excerpt}</P>
            </NavLink>
          </div>
        ))}
      </div>
    </CenteredContainer>

    <CenteredContainer>
      <H1>About Us</H1>
      <p>Godfather ipsum dolor sit amet. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? I don't trust a doctor who can hardly speak English. Michael, you never told me you knew Johnny Fontane!</p>
    </CenteredContainer>

  </Fragment>
)

export const query = graphql`
  query {
    articles: allMdx {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
    resortOverview: file(relativePath: { eq: "alma-resort-overview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "image-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "image-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "image-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "image-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "image-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "image-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage