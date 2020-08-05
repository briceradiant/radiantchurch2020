import React from "react"
import { ContextProviderComponent } from "./Context"

import PageWrap from "./PageWrap"

const Layout = ({ children, location }) => {
  // console.log(props)
  return (
    <ContextProviderComponent>
      <PageWrap children={children} location={location} />
    </ContextProviderComponent>
  )
}

export default Layout
