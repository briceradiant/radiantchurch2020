import React, { useEffect } from "react"
import useConnectDirectoryData from "../static_queries/useConnectDirectoryData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import Cards from "../components/GlobalBlocks/SubpageCards/Cards"

const ConnectPage = props => {
  const { set } = props
  const data = useConnectDirectoryData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description
  console.log(data)

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo-inverse", hamburgerColor: "white" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Connect | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="connect" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
        <Cards data={data.pagesJson.subpage_cards} />
      </div>
      <Footer />
    </>
  )
}

export default ConnectPage
