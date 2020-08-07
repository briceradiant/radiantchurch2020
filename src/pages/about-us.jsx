import React, { useEffect } from "react"
import useAboutUsData from "../static_queries/useAboutUsData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import Images from "../components/About/AboutUsImages"
import Pillars from "../components/About/Pillars"

const AboutUsPage = props => {
  const { set } = props
  const data = useAboutUsData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description
  console.log(data)

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "About Us | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="about-us" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
        <Images data={data.pagesJson.about_images} />
        <Pillars data={data.pagesJson.pillars} />
      </div>
      <Footer />
    </>
  )
}

export default AboutUsPage
