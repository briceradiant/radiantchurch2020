import React from "react"
import parse from "html-react-parser"

import Underline from "../../../static/underline1_black.svg"

import style from "./Hero.module.scss"

const Hero = props => {
  const { scrollPos, data } = props
  // console.log(data)
  return (
    <section className={`${style.hero} hero pad_lg`}>
      <div className={`${style.wrapper} wrapper flex column space-between`}>
        <div
          className={style.title_container}
          style={{ transform: `translateY(${scrollPos * 1.25}px)` }}
        >
          <h1 className={style.title}>
            radiant <span style={{ display: "none" }}>church</span>
          </h1>
        </div>
        <h2 className={`${style.headline} text-6xl yellow-color`}>
          God’s{" "}
          <em>
            <Underline className={style.underline} />
            family
          </em>{" "}
          on mission.
        </h2>
        <div className="flex align-end" style={{ height: "100%" }}>
          <div className="col">
            <div className={`${style.about} inner`}>
              {parse(data.bodytext)}
              <a href="#" className="btn">
                Watch Online
              </a>
            </div>
          </div>
          <div
            className={`${style.image} col bg`}
            style={{
              backgroundImage: "url('https://via.placeholder.com/1200x800')",
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
