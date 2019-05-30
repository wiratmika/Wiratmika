import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Modal from "react-responsive-modal"

import { Button, SectionContainer, SectionHeader } from "../components/common"
import "./portfolio.css"

const PortfolioContainer = styled(SectionContainer)`
  background: #f5f5f5;
`

const scrollToBottom = () =>
  window.scroll({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  })

const Work = ({ id, title, shortTitle, image, isEnd = false, openModal }) => (
  <Box
    as="li"
    className={`works${isEnd ? " end" : ""}`}
    width={[1, 1 / 2, 1 / 3]}
    px={2}
  >
    <figure>
      <div>
        <Img fluid={image} alt={title} />
        <figcaption>
          <h3>{shortTitle}</h3>
          <Button onClick={isEnd ? scrollToBottom : () => openModal(id)}>
            {isEnd ? "Collaborate" : "View"}
          </Button>
        </figcaption>
      </div>
    </figure>
  </Box>
)

const ModalContent = ({ title, role, date, link, description }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <p className="lead">
      Role: {role} | {date} |
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </p>
    <p>{description}</p>
  </React.Fragment>
)

export default () => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState({})
  const { allWorksJson } = useStaticQuery(query)

  const openModal = id => {
    setOpen(true)
    setContent(allWorksJson.edges.find(work => work.node.id === id).node)
  }

  const closeModal = () => {
    setOpen(false)
    setContent({})
  }

  return (
    <PortfolioContainer
      outerContent={
        <Flex
          as="ul"
          className="grid cs-style"
          width={1}
          mx="auto"
          flexWrap="wrap"
        >
          {allWorksJson.edges.map(({ node }, i) => (
            <Work
              key={node.id}
              id={node.id}
              title={node.title}
              shortTitle={node.shortTitle}
              image={node.thumbnail.childImageSharp.fluid}
              isEnd={allWorksJson.totalCount === i + 1}
              openModal={openModal}
            />
          ))}
        </Flex>
      }
    >
      <SectionHeader>Portfolio</SectionHeader>

      <Box mx="auto">
        <p className="text-center">
          Here are excerpts of projects that I've done.
        </p>
      </Box>

      <Modal open={open} onClose={closeModal} center>
        <ModalContent {...content} />
      </Modal>
    </PortfolioContainer>
  )
}

const query = graphql`
  query {
    allWorksJson {
      totalCount
      edges {
        node {
          id
          title
          shortTitle
          role
          date
          link
          description
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
