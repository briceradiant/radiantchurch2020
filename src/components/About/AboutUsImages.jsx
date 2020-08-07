import React from "react"

import style from "./Images.module.scss"

const Images = props => {
  const { data } = props
  // console.log(data)

  return (
    <section className={`${style.about_images} pad_md`}>
      <div className={`${style.wrapper} wrapper`}>
        <div className="flex grid two">
          {data.map((image, index) => {
            return (
              <div
                className="grid-item one-half"
                key={index}
                style={{ marginTop: index === 0 ? "75px" : 0 }}
              >
                <img
                  src={`https://res.cloudinary.com/radiant-church/image/upload${image}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Images
