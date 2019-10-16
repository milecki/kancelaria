import React from "react"
import SEO from "../components/seo"

import Hero from "../components/hero/hero"
import Intro from "../components/home/intro/intro"
import Services from "../components/home/services/services"
import Areas from "../components/home/areas/areas"
import CTA from "../components/home/cta/cta"
import Team from "../components/home/team/team"

import bgImage from "../images/bg-main.jpg"

// import Img from "gatsby-image"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero src={bgImage}>
      Prof. Szydło i Współpracownicy
      <span>- prawo na najwyższym poziomie -</span>
    </Hero>
    <Intro />
    <Services />
    <Areas />
    <CTA />
    <Team />
  </>
)

export default IndexPage
