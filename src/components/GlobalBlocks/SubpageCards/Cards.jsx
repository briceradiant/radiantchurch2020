import React from "react"
import { Link } from "gatsby"

import style from "./Cards.module.scss"

const Cards = props => {
  const { data } = props
  const evens = data.filter((el, i) => i % 2 !== 0)
  const odds = data.filter((el, i) => i % 2 === 0)

  return (
    <section className={`${style.directory} pad`}>
      <div className={`${style.fader}`}></div>
      <div className="wrapper md">
        <div className="flex grid two">
          <div className="grid-item one-half">
            {odds.map(item => {
              return (
                <div
                  className={`${style.card} flex align-center justify-center`}
                >
                  <Link to={item.url}>
                    <span
                      className={`${style.title} white-color gilroy-extrabold-font text-xl center-text`}
                    >
                      {item.title}
                    </span>
                    <div className={style.overlay}></div>
                    <img
                      src={`https://res.cloudinary.com/radiant-church/image/upload${item.image}`}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={`${style.right} grid-item one-half`}>
            {evens.map(item => {
              return (
                <div
                  className={`${style.card} flex align-center justify-center`}
                >
                  <Link to={item.url}>
                    <span
                      className={`${style.title} white-color gilroy-extrabold-font text-xl center-text`}
                    >
                      {item.title}
                    </span>
                    <div className={style.overlay}></div>
                    <img
                      src={`https://res.cloudinary.com/radiant-church/image/upload${item.image}`}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
