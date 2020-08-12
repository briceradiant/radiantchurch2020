import React from "react"
import { Link } from "gatsby"

import style from "./Cta.module.scss"

const Cta = props => {
  const { data } = props
  return (
    <section>
      <div className="flex wrap">
        {data.map((item, index) => {
          return (
            <div className={`col`} key={index}>
              {item.url &&
                (item.url.startsWith("/") ? (
                  <Link
                    to={item.url}
                    className={`${style.block} flex align-center justify-center yellow-color gilroy-extrabold-font text-xl center-text`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    href={item.url}
                    className={`${style.block} flex align-center justify-center yellow-color gilroy-extrabold-font text-xl center-text`}
                  >
                    {item.title}
                  </a>
                ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Cta
