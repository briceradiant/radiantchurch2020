import React, { useState, useEffect } from "react"
import useHomeData from "../static_queries/useHomeData"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import SEO from "../components/SEO"
// import Footer from "../components/Footer"

import Hero from "../components/Home/Hero"
// import Feature1 from "../components/Home/Feature1"
// import Feature2 from "../components/Home/Feature2"
// import Feature3 from "../components/Home/Feature3"

const IndexPage = props => {
  const { set } = props
  const data = useHomeData()
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
      <SEO title="Radiant Church | Charleston, SC" />
      <div className="page" id="home">
        <Hero data={data.home_hero} scrollPos={scrollPos} />
        {/* <Feature1 />
        <Feature2 />
        <Feature3 />
        <Footer /> */}
      </div>
    </>
  )
}

export default IndexPage
