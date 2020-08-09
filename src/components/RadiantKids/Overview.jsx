import React from "react"
import parse from "html-react-parser"

import base_style from "./Kids.module.scss"
import style from "./Overview.module.scss"

const Overview = props => {
  const { data } = props

  return (
    <section className={`${style.overview} pad_md`}>
      <div className={`${base_style.wrapper} wrapper`}>
        <div className={`${style.border} flex grid two`}>
          <div className="grid-item one-half">
            <div className="inner text-md">
              {data.headline && (
                <h3 className="text-4xl gilroy-extrabold-font">
                  {data.headline}
                </h3>
              )}
              {data.bodycopy && parse(data.bodycopy)}
            </div>
          </div>
          <div className="grid-item one-half"></div>
        </div>
      </div>
    </section>
  )
}

export default Overview
