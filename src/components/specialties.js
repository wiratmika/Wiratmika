import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { SectionContainer } from "../components/common"

export default () => (
  <SectionContainer>
    <h2 class="text-center" data-magellan-destination="specialties">
      Specialties
    </h2>
    <div class="divider" />

    <div class="row">
      <div class="small-12 medium-4 columns">
        <div class="row">
          <div class="small-10 small-centered columns text-center">
            <FontAwesomeIcon icon="code" size="5x" className="specialty" />
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <h3 class="text-center">Software Engineering</h3>
            <p class="text-center">
              With proficient implementation in Java, PHP, JavaScript, Python,
              and a little bit of Ruby.
            </p>
          </div>
        </div>
      </div>
      <div class="small-12 medium-4 columns">
        <div class="row">
          <div class="small-10 small-centered columns text-center">
            <FontAwesomeIcon
              icon="mobile-alt"
              size="5x"
              className="specialty"
            />
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <h3 class="text-center">Mobile App Development</h3>
            <p class="text-center">
              I serve fluid, cross-platform apps built with React Native for
              breakfast.
            </p>
          </div>
        </div>
      </div>
      <div class="small-12 medium-4 columns">
        <div class="row">
          <div class="small-10 small-centered columns text-center">
            <FontAwesomeIcon icon="desktop" size="5x" className="specialty" />
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <h3 class="text-center">Web Development</h3>
            <p class="text-center">
              HTML5, CSS3, Sass, responsive design, Webpack, and everything in
              between.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
)
