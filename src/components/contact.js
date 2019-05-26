import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

export default () => (
  <footer id="contact">
    <div class="row">
      <div class="medium-9 medium-push-3 columns">
        <h3>Drop me a message!</h3>
        <p class="lead">
          I am moonlighting in interesting projects, specializing in responsive,
          custom-made event and company profile websites. Contact me and let's
          have a nice evening chat together.
        </p>
      </div>

      <div class="medium-3 medium-pull-9 columns">
        <div class="row">
          <StaticQuery
            query={query}
            render={data =>
              data.allSocialJson.edges.map(({ node }) => (
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
  </footer>
)

const query = graphql`
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
