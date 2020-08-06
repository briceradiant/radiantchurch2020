import React from "react"

// import Underline from "../../../static/underline3_yellow.svg"

import style from "./Feature.module.scss"

const Feature1 = () => {
  return (
    <section className={`${style.feature2} pad_lg gray-bg`}>
      <div className={`${style.wrapper} wrapper`}>
        <div className="flex">
          <div className="one-half text flex column justify-center">
            <div className={`${style.inner} inner`}>
              <h2 className="text-3xl">
                Lorem Ipsum{" "}
                <em>
                  {/* Headline <Underline className={style.underline} /> */}
                </em>{" "}
                2 lines
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim
              </p>
              <a href="#" className="btn">
                Button Title 1
              </a>
            </div>
          </div>
          <div className="one-half image">
            <img src="https://via.placeholder.com/900x1200" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature1
