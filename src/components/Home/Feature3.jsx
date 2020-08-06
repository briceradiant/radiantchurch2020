import React from "react"

import style from "./Feature.module.scss"

const Feature3 = () => {
  return (
    <section className={`${style.feature3} pad_lg no_pad_top`}>
      <div className={`${style.wrapper} wrapper`}>
        <div className="flex">
          <div className={`${style.image_grid} three-fifths flex grid`}>
            <div className={`${style.left} grid-item one-third`}>
              <div className={style.image}>
                <img src="https://via.placeholder.com/550x750" alt="" />
              </div>
              <div className={style.image}>
                <img src="https://via.placeholder.com/550x750" alt="" />
              </div>
            </div>
            <div className={`${style.right} grid-item two-thirds`}>
              <div className={style.image}>
                <img src="https://via.placeholder.com/550x750" alt="" />
              </div>
              <div className={style.image}>
                <img src="https://via.placeholder.com/1000x1200" alt="" />
              </div>
            </div>
          </div>
          <div className="two-fifths text flex column justify-center">
            <div className={`${style.inner} inner`}>
              <h2 className="text-3xl">Lorem Ipsum Headline 2 lines</h2>
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
        </div>
      </div>
    </section>
  )
}

export default Feature3
