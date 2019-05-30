import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO() {
  const title = "Wiratmika"
  const description =
    "Social impact-driven, full-stack technologist obsessed with making disproportionate impact at scale."
  const author = "@wiratmika"

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}

export default SEO
