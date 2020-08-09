import React from "react"
import ContextConsumer from "../Context"
import VizSensor from "react-visibility-sensor"
import parse from "html-react-parser"

import style from "./Pillars.module.scss"

const Pillars = props => {
  const { data } = props
  //   console.log(data)
  return (
    <section className={`${style.pillars} pad_lg no_pad_top`}>
      {data.map((item, index) => {
        return (
          <ContextConsumer key={index}>
            {({ data, set }) => {
              return (
                <VizSensor
                  partialVisibility
                  minTopValue={data.winHeight}
                  onChange={isVisible => {
                    isVisible &&
                      set({
                        hamburgerColor: index == 1 ? "white" : "black",
                        logo: index == 1 ? "logo-inverse" : "logo-black",
                      })
                  }}
                >
                  <div
                    className={`${style.row} ${
                      index == 1 ? "base-bg white-color" : ""
                    }`}
                  >
                    <div className={`${style.wrapper} wrapper flex`}>
                      <div className="col">
                        <div
                          className={`${style.num} gilroy-extrabold-font text-xl`}
                        >
                          {"0" + (index + 1)}
                        </div>
                        <div className={`${style.inner} inner`}>
                          {item.headline && (
                            <h3
                              className={`${style.headline} ${
                                !item.subheadline ? style.no_subheadline : ""
                              } text-4xl gilroy-extrabold-font`}
                            >
                              {item.headline}
                            </h3>
                          )}
                          {item.subheadline && (
                            <h4
                              className={`${style.subheadline} text-lg gilroy-extrabold-font`}
                            >
                              {item.subheadline}
                            </h4>
                          )}
                        </div>
                      </div>
                      <div
                        className={`${style.right} ${
                          item.extended_bodycopy ? style.no_border : ""
                        } col two flex column justify-center`}
                      >
                        <div className={`${style.inner} inner text-md`}>
                          {item.bodycopy && <p>{parse(item.bodycopy)}</p>}
                        </div>
                      </div>
                    </div>
                    {item.extended_bodycopy && (
                      <div className={`${style.wrapper} wrapper`}>
                        <div
                          className={`${style.extended} gray-bg inner text-md`}
                        >
                          {parse(item.extended_bodycopy)}
                        </div>
                      </div>
                    )}
                  </div>
                </VizSensor>
              )
            }}
          </ContextConsumer>
        )
      })}
    </section>
  )
}

export default Pillars
