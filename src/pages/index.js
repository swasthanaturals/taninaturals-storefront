import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/css/global.css"
import Layout from "../layouts/Layout"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl">Hi people</h1>
    <p className="font-serif text-3xl">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
