import React, { useEffect } from "react"
import useLiveStreamData from "../static_queries/useLiveStreamData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import Main from "../components/LiveStream/Main"
import Cta from "../components/GlobalBlocks/CTA/Cta"

const LiveStreamPage = props => {
  const { set } = props
  const data = useLiveStreamData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo-inverse", hamburgerColor: "white" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Live Stream | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
        <Main data={data.pagesJson.live_stream_iframe} />
        <Cta data={data.pagesJson.blocks} />
      </div>
      <Footer />
    </>
  )
}

export default LiveStreamPage
