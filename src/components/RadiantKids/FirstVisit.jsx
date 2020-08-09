import React from "react"
import parse from "html-react-parser"

import base_style from "./Kids.module.scss"
import style from "./FirstVisit.module.scss"

const Overview = props => {
  const { data } = props

  return (
    <section className="">
      <div className={`${base_style.wrapper} wrapper`}>
        <div className="flex grid two">
          <div className="grid-item one-half">
            <div className="inner text-md">
              {data.headline && (
                <h3 className="text-xl gilroy-extrabold-font">
                  {data.headline}
                </h3>
              )}
              {data.bodycopy && parse(data.bodycopy)}
            </div>
          </div>
          <div className="grid-item one-half">
            <div className="flex grid three">
              {data.info_boxes.map((item, index) => {
                return (
                  <div
                    className={`${style.box_container} grid-item one-third`}
                    key={index}
                  >
                    <div className={`${style.box} flex align-end`}>{item}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.image} wrapper pad_md`}>
        <img
          src={`https://res.cloudinary.com/radiant-church/image/upload${data.image}`}
        />
      </div>
    </section>
  )
}

export default Overview
