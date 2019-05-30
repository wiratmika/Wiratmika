import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { Box } from "@rebass/grid"

import { SectionContainer } from "../components/common"

const Title = styled.h3`
  color: white;
`

const Social = ({ link, icon, isBrand }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon
      icon={isBrand ? ["fab", icon] : icon}
      size="2x"
      className="social"
    />
  </a>
)

const Contact = ({ className }) => (
  <StaticQuery
    query={query}
    render={({ file, allSocialJson }) => {
      return (
        <BackgroundImage
          Tag="footer"
          className={className}
          fluid={file.childImageSharp.fluid}
        >
          <SectionContainer>
            <Box px={4}>
              <Title>Drop me a message!</Title>
              <p>
                I am moonlighting in interesting projects, specializing in
                responsive, custom-made event and company profile websites.
                Contact me and let's have a nice evening chat together.
              </p>

              {allSocialJson.edges.map(({ node }) => (
                <Social
                  key={node.id}
                  link={node.link}
                  icon={node.icon}
                  isBrand={node.isBrand}
                />
              ))}
            </Box>
          </SectionContainer>
        </BackgroundImage>
      )
    }}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "tree.jpg" }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSocialJson {
      edges {
        node {
          id
          link
          icon
          isBrand
        }
      }
    }
  }
`

export default styled(Contact)`
  background-attachment: fixed;
  color: white;
`
