import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

import { SectionContainer, SectionHeader } from "../components/common"
import "./portfolio.css"

const PortfolioContainer = styled(SectionContainer)`
  background: #f5f5f5;
`

const Subtitle = styled.p`
  text-align: center;
`

const Work = ({ id, title, shortTitle, image, isEnd = false }) => (
  <Box
    as="li"
    className={`works ${isEnd ? "end" : ""}`}
    width={[1, 1 / 2, 1 / 3]}
    px={2}
  >
    <figure>
      <div>
        <Img fluid={image} alt={title} />
        <figcaption>
          <h3>{shortTitle}</h3>
          <a
            href={isEnd ? "#contact" : "#"}
            className="button"
            data-reveal-id={id}
          >
            {isEnd ? "Collaborate" : "View"}
          </a>
        </figcaption>
      </div>
    </figure>
  </Box>
)

export default () => (
  <PortfolioContainer
    outerContent={
      <Flex
        as="ul"
        className="grid cs-style"
        width={1}
        mx="auto"
        flexWrap="wrap"
      >
        <StaticQuery
          query={query}
          render={data =>
            data.allWorksJson.edges.map(({ node }, i) => (
              <Work
                key={node.id}
                id={node.id}
                title={node.title}
                shortTitle={node.shortTitle}
                image={node.thumbnail.childImageSharp.fluid}
                isEnd={data.allWorksJson.totalCount === i + 1}
              />
            ))
          }
        />
      </Flex>
    }
  >
    <SectionHeader>Portfolio</SectionHeader>

    <Box mx="auto">
      <Subtitle>Here are excerpts of projects that I've done.</Subtitle>
    </Box>
  </PortfolioContainer>
)

const query = graphql`
  query {
    allWorksJson {
      totalCount
      edges {
        node {
          id
          title
          shortTitle
          thumbnail {
            childImageSharp {
              fluid(quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
