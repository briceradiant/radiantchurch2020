import React from "react"

import style from "./Images.module.scss"

const Images = props => {
  const { data } = props
  // console.log(data)

  return (
    <section className={`${style.dna_images} pad_md`}>
      <div className={`${style.wrapper} wrapper`}>
        <div className={`${style.grid} flex grid two`}>
          <div className="grid-item one-half">
            {data.slice(0, 2).map((image, index) => {
              return (
                <div
                  key={index}
                  className={index === 0 ? style.first : ""}
                  //   style={{ marginBottom: index === 0 ? "35px" : "" }}
                >
                  <img
                    src={`https://res.cloudinary.com/radiant-church/image/upload${image}`}
                  />
                </div>
              )
            })}
          </div>
          <div className="grid-item one-half">
            {data.slice(2, 3).map((image, index) => {
              return (
                <div key={index} className={style.single}>
                  <img
                    src={`https://res.cloudinary.com/radiant-church/image/upload${image}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Images
