import React, { useEffect } from "react"
import useStaffData from "../static_queries/useStaffData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import Personnel from "../components/Staff/Personnel"

const StaffPage = props => {
  const { set } = props
  const data = useStaffData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo-black" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Meet our Staff | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="staff" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
        <Personnel data={data.pagesJson.personnel} />
      </div>
      <Footer />
    </>
  )
}

export default StaffPage
