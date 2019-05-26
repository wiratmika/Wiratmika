import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Title = styled.h3`
  margin-top: 1rem;
`

const Social = ({ link, icon, isBrand }) => (
  <div class="small-4 columns">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={isBrand ? ["fab", icon] : icon}
        size="4x"
        className="social"
      />
    </a>
  </div>
)

const Contact = ({ className }) => (
  <StaticQuery
    query={backgroundQuery}
    render={data => {
      return (
        <BackgroundImage
          Tag="footer"
          className={className}
          fluid={data.file.childImageSharp.fluid}
        >
          <div class="row">
            <div class="medium-9 medium-push-3 columns">
              <Title>Drop me a message!</Title>
              <p class="lead">
                I am moonlighting in interesting projects, specializing in
                responsive, custom-made event and company profile websites.
                Contact me and let's have a nice evening chat together.
              </p>
            </div>

            <div class="medium-3 medium-pull-9 columns">
              <div class="row">
                <StaticQuery
                  query={socialQuery}
                  render={socialData =>
                    socialData.allSocialJson.edges.map(({ node }) => (
                      <Social
                        key={node.id}
                        link={node.link}
                        icon={node.icon}
                        isBrand={node.isBrand}
                      />
                    ))
                  }
                />
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const backgroundQuery = graphql`
  query {
    file(relativePath: { eq: "tree.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const socialQuery = graphql`
  query {
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
  padding-top: 8rem;
  padding-bottom: 5rem;

  background-attachment: fixed;
  color: white;
`
