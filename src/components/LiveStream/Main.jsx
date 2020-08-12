import React from "react"
import Iframe from "react-iframe"
import ContextConsumer from "../Context"
import VizSensor from "react-visibility-sensor"

const Main = props => {
  const src = props.data
  //   console.log(data)
  return (
    <ContextConsumer>
      {({ data, set }) => {
        return (
          <VizSensor
            partialVisibility
            minTopValue={data.winHeight}
            onChange={isVisible => {
              isVisible && set({ hamburgerColor: "black", logo: "logo-black" })
            }}
          >
            <section className="pad">
              <div className="wrapper md">
                <Iframe
                  url={src}
                  width="100%"
                  height="450px"
                  display="initial"
                  position="relative"
                />
              </div>
            </section>
          </VizSensor>
        )
      }}
    </ContextConsumer>
  )
}

export default Main
