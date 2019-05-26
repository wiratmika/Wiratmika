import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Work = ({ id, title, shortTitle, image, isEnd = false }) => (
  <li class={`works small-12 medium-6 large-4 columns ${isEnd ? "end" : ""}`}>
    <figure>
      <div>
        <Img fixed={image} alt={title} />
        <figcaption>
          <h3>{shortTitle}</h3>
          <a href={isEnd ? "#contact" : "#"} class="button" data-reveal-id={id}>
            {isEnd ? "Collaborate" : "View"}
          </a>
        </figcaption>
      </div>
    </figure>
  </li>
)

export default () => (
  <section id="portfolio">
    <h2 class="text-center" data-magellan-destination="portfolio">
      Portfolio
    </h2>
    <a name="portfolio" />
    <div class="divider" />

    <div class="row">
      <div class="small-9 small-centered columns">
        <p class="text-center">Here are several projects that I've done.</p>
      </div>
    </div>

    <ul class="row grid cs-style">
      <StaticQuery
        query={query}
        render={data =>
          data.allWorksJson.edges.map(({ node }, i) => (
            <Work
              key={node.id}
              id={node.id}
              title={node.title}
              shortTitle={node.shortTitle}
              image={node.thumbnail.childImageSharp.fixed}
              isEnd={data.allWorksJson.edges.length === i + 1}
            />
          ))
        }
      />
    </ul>
  </section>
)

const query = graphql`
  query {
    allWorksJson {
      edges {
        node {
          id
          title
          shortTitle
          thumbnail {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
