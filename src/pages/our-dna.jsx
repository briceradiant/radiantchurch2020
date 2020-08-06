import React, { useEffect } from "react"
import useOurDnaData from "../static_queries/useOurDnaData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"

const OurDnaPage = props => {
  const { set } = props
  const data = useOurDnaData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Our DNA | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="about-us" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
      </div>
      <Footer />
    </>
  )
}

export default OurDnaPage
