import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

export const SectionContainer = props => (
  <Box {...props} py={5}>
    <Flex style={{ maxWidth: "960px" }} mx="auto" flexWrap="wrap">
      {props.children}
    </Flex>
    {props.outerContent}
  </Box>
)

const Divider = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  width: 75px;
  border-top: 2px solid #ccc;
`

export const SectionHeader = props => (
  <Flex flexDirection="column" width={1}>
    <h2 className="text-center">{props.children}</h2>
    <Divider />
  </Flex>
)

export const Button = styled.a`
  cursor: pointer;
  border-color: #21ccbb;
  color: #21ccbb;
  transition: background-color 300ms ease-out;
  outline: #21ccbb solid 2px;
`
