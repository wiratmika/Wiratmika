import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

export const SectionContainer = props => (
  <Box {...props} py={5}>
    <Flex style={{ maxWidth: "1024px" }} mx="auto" flexWrap="wrap">
      {props.children}
    </Flex>
  </Box>
)

export const Divider = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 50px;
  border-top: 2px solid #ccc;
  padding-bottom: 2.3rem;
`
