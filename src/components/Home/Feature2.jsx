import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

// import Underline from "../../../static/underline3_yellow.svg"

import style from "./Feature.module.scss"

const Feature2 = props => {
  const content = props.data
  return (
    <section className={`${style.feature2} pad_lg gray-bg`}>
      <div className={`${style.wrapper} wrapper`}>
        <div className="flex">
          <div className="one-half text flex column justify-center">
            <div className={`${style.inner} inner`}>
              {content.home_feature_headline && (
                <h2 className="text-3xl">
                  {parse(content.home_feature_headline)}
                </h2>
              )}
              {content.home_feature_bodytext && (
                <p>{parse(content.home_feature_bodytext)}</p>
              )}
              {content.home_feature_cta_url &&
                (content.home_feature_cta_url.startsWith("/") ? (
                  <Link to={content.home_feature_cta_url} className="btn">
                    {content.home_feature_cta_text}
                  </Link>
                ) : (
                  <a href={content.home_feature_cta_url} className="btn">
                    {content.home_feature_cta_text}
                  </a>
                ))}
            </div>
          </div>
          {content.home_feature_image && (
            <div className="one-half image">
              <img
                src={`https://res.cloudinary.com/radiant-church/image/upload${content.home_feature_image}`}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Feature2
