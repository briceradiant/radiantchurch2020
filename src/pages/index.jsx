import React, { useState, useEffect } from "react"
import useHomeData from "../static_queries/useHomeData"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/Home/Hero"
import Feature1 from "../components/Home/Feature1"
import Feature2 from "../components/Home/Feature2"
import Feature3 from "../components/Home/Feature3"

const IndexPage = props => {
  const { set } = props
  const data = useHomeData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description
  const [scrollPos, setScrollPos] = useState(0)
  // console.log(data)

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.y)
    setScrollPos(currPos.y)
  })

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Radiant Church | Charleston, SC"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="home">
        <Hero data={data.pagesJson.home_hero} scrollPos={scrollPos} />
        <Feature1 data={data.pagesJson.home_feature_1} />
        <Feature2 data={data.pagesJson.home_feature_2} />
        <Feature3 data={data.pagesJson.home_feature_3} />
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
