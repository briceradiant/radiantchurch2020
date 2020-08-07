import React from "react"

import Slider from "react-slick"
import SVG from "react-inlinesvg"
import parse from "html-react-parser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import style from "./Personnel.module.scss"

const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "inline-block" }}
      onClick={onClick}
    >
      <SVG src="/staff-arrow.svg" />
    </div>
  )
}

const NextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "inline-block" }}
      onClick={onClick}
    >
      <SVG src="/staff-arrow.svg" />
    </div>
  )
}

const Personnel = props => {
  const { data } = props
  const settings = {
    infinite: false,
    speed: 850,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="next" />,
    prevArrow: <PrevArrow className="prev" />,
  }

  return (
    <section className={`${style.personnel} pad_lg`}>
      <div className={`${style.wrapper} wrapper`}>
        <Slider {...settings}>
          {data.map((person, index) => {
            return (
              <div key={index}>
                {person.headshot && (
                  <div className="headshot">
                    <img
                      src={`https://res.cloudinary.com/radiant-church/image/upload${person.headshot}`}
                    />
                  </div>
                )}
                {person.name && (
                  <h3
                    className="text-lg gilroy-extrabold-font yellow-color"
                    style={{ marginTop: "15px" }}
                  >
                    {person.name}{" "}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="base-color"
                        style={{ fontSize: "1rem", marginLeft: "7px" }}
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    )}
                  </h3>
                )}
                {person.role && (
                  <h4
                    className="text-sm caps gilroy-extrabold-font"
                    style={{ marginTop: "5px" }}
                  >
                    {person.role}
                  </h4>
                )}
                {person.bio && (
                  <div
                    className="bio inner text-md"
                    style={{ marginTop: "45px" }}
                  >
                    {parse(person.bio)}
                  </div>
                )}
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Personnel
