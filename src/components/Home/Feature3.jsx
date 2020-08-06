import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import style from "./Feature.module.scss"

const Feature3 = props => {
  const { data } = props
  return (
    <section className={`${style.feature3} pad_lg no_pad_top`}>
      <div className={`${style.wrapper} wrapper`}>
        <div className="flex">
          <div className={`${style.image_grid} three-fifths flex grid`}>
            <div className={`${style.left} grid-item one-third`}>
              {data.home_feature_images.slice(0, 2).map((pic, index) => {
                return (
                  <div className={style.image} key={index}>
                    <img
                      src={`https://res.cloudinary.com/radiant-church/image/upload${pic}`}
                      alt=""
                    />
                  </div>
                )
              })}
            </div>
            <div className={`${style.right} grid-item two-thirds`}>
              {data.home_feature_images.slice(2, 4).map((pic, index) => {
                return (
                  <div className={style.image} key={index}>
                    <img
                      src={`https://res.cloudinary.com/radiant-church/image/upload${pic}`}
                      alt=""
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="two-fifths text flex column justify-center">
            <div className={`${style.inner} inner`}>
              {data.home_feature_headline && (
                <h2 className="text-3xl">
                  {parse(data.home_feature_headline)}
                </h2>
              )}
              {data.home_feature_bodytext && (
                <p>{parse(data.home_feature_bodytext)}</p>
              )}
              {data.home_feature_cta_url &&
                (data.home_feature_cta_url.startsWith("/") ? (
                  <Link to={data.home_feature_cta_url} className="btn">
                    {data.home_feature_cta_text}
                  </Link>
                ) : (
                  <a href={data.home_feature_cta_url} className="btn">
                    {data.home_feature_cta_text}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature3
