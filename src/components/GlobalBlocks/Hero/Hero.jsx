import React from "react"
import ContextConsumer from "../../Context"
import { isMobile } from "react-device-detect"
import VizSensor from "react-visibility-sensor"
import parse from "html-react-parser"
// import Underline from "../../../../static/underline1_black.svg"

import style from "./Hero.module.scss"

const Hero = props => {
  const {
    title,
    hero_headline,
    hero_background_color,
    hero_font_color,
  } = props.data.hero
  return (
    <ContextConsumer>
      {({ data, set }) => {
        return (
          <VizSensor
            partialVisibility
            minTopValue={data.winHeight}
            onChange={isVisible => {
              isVisible &&
                set({
                  hamburgerColor:
                    hero_background_color === "Yellow" || "White"
                      ? "black"
                      : "white",
                  logo:
                    hero_background_color === "Yellow" || "White"
                      ? "logo-black"
                      : "logo-inverse",
                })
            }}
          >
            <section
              className={`${
                style.hero
              } hero ${hero_background_color.toLowerCase().concat("-bg")} pad`}
              style={{ paddingTop: `${!isMobile ? 125 : 125 * 0.5}px` }}
            >
              <div className={`${style.wrapper} wrapper`}>
                <h1
                  className={`${style.page_title} gilroy-light-font text-xl lowercase`}
                  style={{ paddingRight: 0 }}
                >
                  {title}
                </h1>
                <h2
                  className={`text-6xl ${hero_font_color
                    .toLowerCase()
                    .concat("-color")}`}
                >
                  {parse(hero_headline)}
                </h2>
              </div>
            </section>
          </VizSensor>
        )
      }}
    </ContextConsumer>
  )
}

export default Hero
