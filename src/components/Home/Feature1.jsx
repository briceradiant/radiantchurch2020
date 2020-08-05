import React from "react"
import ContextConsumer from "../Context"
import VizSensor from "react-visibility-sensor"

import Underline from "../../../static/underline2_yellow.svg"

import style from "./Feature.module.scss"

const Feature1 = () => {
  return (
    <ContextConsumer>
      {({ data, set }) => {
        // console.log(data)
        return (
          <VizSensor
            partialVisibility
            minTopValue={data.winHeight}
            onChange={isVisible => {
              isVisible
                ? set({ hamburgerColor: "white", logo: "logo-inverse" })
                : set({ hamburgerColor: "black", logo: "logo" })
            }}
          >
            <section className={`${style.feature1} pad_lg base-bg white-color`}>
              <div className={`${style.wrapper} wrapper`}>
                <div className="flex">
                  <div className="one-half image">
                    <img src="https://via.placeholder.com/900x1200" alt="" />
                  </div>
                  <div className="one-half text flex column justify-center">
                    <div className={`${style.inner} inner`}>
                      <h2 className="text-3xl">
                        Lorem Ipsum{" "}
                        <em>
                          <Underline className={style.underline} />
                          Headline
                        </em>{" "}
                        2 lines
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim
                      </p>
                      <a href="#" className="btn transparent">
                        Button Title 1
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </VizSensor>
        )
      }}
    </ContextConsumer>
  )
}

export default Feature1
