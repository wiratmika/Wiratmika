import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-top: 25vh;
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  color: white;
  text-align: center;
`

const Hero = ({ className }) => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={data.file.childImageSharp.fluid}
        >
          <Title>Hello, there.</Title>
          <Subtitle>Thank you for your curiosity of me.</Subtitle>
        </BackgroundImage>
      )
    }}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "fuji.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default styled(Hero)`
  height: 100vh;
  background-attachment: fixed;
  background-position: center 0%;
`
