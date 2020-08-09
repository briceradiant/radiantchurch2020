import React from "react"
import parse from "html-react-parser"

import base_style from "./Kids.module.scss"

const CheckIn = props => {
  const { data } = props

  return (
    <section>
      <div className={`${base_style.wrapper} wrapper content`}>
        {data.headline && (
          <h3 className="text-4xl gilroy-extrabold-font">{data.headline}</h3>
        )}
        <div className="flex grid two">
          <div className="grid-item one-half">
            <div className="inner text-md">
              {data.left_column_bodycopy && parse(data.left_column_bodycopy)}
            </div>
          </div>
          <div className="grid-item one-half">
            <div className="inner">
              {data.right_column_bodycopy && parse(data.right_column_bodycopy)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckIn
