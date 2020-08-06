import React from "react"
import { Link } from "gatsby"
import ContextConsumer from "../Context"
import VizSensor from "react-visibility-sensor"
import parse from "html-react-parser"

// import Underline from "../../../static/underline2_yellow.svg"

import style from "./Feature.module.scss"

const Feature1 = props => {
  const content = props.data
  return (
    <ContextConsumer>
      {({ data, set }) => {
        // console.log(data)
        return (
          <VizSensor
            partialVisibility
            minTopValue={data.winHeight}
            onChange={isVisible => {
              isVisible
                ? set({ hamburgerColor: "white", logo: "logo-inverse" })
                : set({ hamburgerColor: "black", logo: "logo" })
            }}
          >
            <section className={`${style.feature1} pad_lg base-bg white-color`}>
              <div className={`${style.wrapper} wrapper`}>
                <div className="flex">
                  {content.home_feature_image && (
                    <div className="one-half image">
                      <img
                        src={`https://res.cloudinary.com/radiant-church/image/upload${content.home_feature_image}`}
                        alt=""
                      />
                    </div>
                  )}

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
                          <Link
                            to={content.home_feature_cta_url}
                            className="btn transparent"
                          >
                            {content.home_feature_cta_text}
                          </Link>
                        ) : (
                          <a
                            href={content.home_feature_cta_url}
                            className="btn transparent"
                          >
                            {content.home_feature_cta_text}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </VizSensor>
        )
      }}
    </ContextConsumer>
  )
}

export default Feature1
