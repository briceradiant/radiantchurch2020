import React, { useEffect } from "react"
import useEventsData from "../static_queries/useEventsData"

import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import EventsCalendar from "../components/Events/Calendar"

const EventsPage = props => {
  const { set } = props
  const data = useEventsData()
  const { seo_title, seo_description } = data.pagesJson
  const siteDescription = data.site.siteMetadata.description
  //   console.log(data)

  useEffect(() => {
    //sets menu to be closed on page mount
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo-inverse", hamburgerColor: "white" })
    }, 400)
  }, [])

  return (
    <>
      <SEO
        title={seo_title ? seo_title : "Upcoming Events | Radiant Church"}
        description={seo_description ? seo_description : siteDescription}
      />
      <div className="page" id="events" style={{ minHeight: "100vh" }}>
        <Hero data={data.pagesJson} />
        <EventsCalendar data={data.allEventsJson.edges} />
      </div>
      <Footer />
    </>
  )
}

export default EventsPage
