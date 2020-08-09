import React, { useEffect } from "react"
import useResourcesDirectoryData from "../static_queries/useResourcesDirectoryData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"

const ResourcesPage = props => {
  const { set } = props
  const data = useResourcesDirectoryData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description
  // console.log(data)

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo-black" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Resources | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="resources" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
      </div>
      <Footer />
    </>
  )
}

export default ResourcesPage
