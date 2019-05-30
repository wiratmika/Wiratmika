import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Flex, Box } from "@rebass/grid"

import { SectionContainer, SectionHeader } from "../components/common"

const Specialty = ({ icon, title, children }) => (
  <Box width={[1, 1 / 3]} px={2}>
    <Box className="text-center">
      <FontAwesomeIcon icon={icon} size="4x" className="specialty" />
    </Box>
    <Box>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{children}</p>
    </Box>
  </Box>
)

export default () => (
  <SectionContainer>
    <SectionHeader>Specialties</SectionHeader>

    <Flex flexWrap="wrap">
      <Specialty icon="code" title="Software Engineering">
        With proficient implementation in Java, PHP, JavaScript, Python, and a
        little bit of Ruby.
      </Specialty>
      <Specialty icon="mobile-alt" title="Mobile App Development">
        I serve fluid, cross-platform apps built with React Native for
        breakfast.
      </Specialty>
      <Specialty icon="desktop" title="Web Development">
        HTML5, CSS3, Sass, responsive design, Webpack, and everything in
        between.
      </Specialty>
    </Flex>
  </SectionContainer>
)
