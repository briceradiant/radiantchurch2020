import React, { useEffect } from "react"
import useRadiantKidsData from "../static_queries/useRadiantKidsData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import Images from "../components/About/RadiantKidsImages"
import Overview from "../components/RadiantKids/Overview"
import FirstVisit from "../components/RadiantKids/FirstVisit"
import CheckIn from "../components/RadiantKids/CheckIn"
import ViewingRoom from "../components/RadiantKids/ViewingRoom"

const RadiantKidsPage = props => {
  const { set } = props
  const data = useRadiantKidsData()
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
        title={seo_title ? seo_title : "Radiant Kids | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="radiant-kids" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
        <Images data={data.pagesJson.radiant_kids_imags} />
        <Overview data={data.pagesJson.overview} />
        <FirstVisit data={data.pagesJson.first_visit} />
        <CheckIn data={data.pagesJson.check_in} />
        <ViewingRoom data={data.pagesJson.parents_viewing_room} />
      </div>
      <Footer />
    </>
  )
}

export default RadiantKidsPage
