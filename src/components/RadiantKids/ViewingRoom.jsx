import React from "react"
import parse from "html-react-parser"

import base_style from "./Kids.module.scss"
import style from "./ViewingRoom.module.scss"

const ViewingRoom = props => {
  const { data } = props

  return (
    <section className={`${style.viewing_room} pad_md`}>
      <div className={`${base_style.wrapper} wrapper content text-md`}>
        {data.headline && (
          <h3 className="text-4xl gilroy-extrabold-font">{data.headline}</h3>
        )}
        <p>{data.bodycopy && parse(data.bodycopy)}</p>
      </div>
    </section>
  )
}

export default ViewingRoom
