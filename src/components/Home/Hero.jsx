import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import style from "./Hero.module.scss"

const Hero = props => {
  const { scrollPos, data } = props
  // console.log(data)
  return (
    <section className={`${style.hero} hero pad_lg`}>
      <div className={`${style.wrapper} wrapper flex column space-between`}>
        <div
          className={style.title_container}
          style={{ transform: `translateY(${scrollPos * 1.25}px)` }}
        >
          <h1 className={style.title}>
            radiant <span style={{ display: "none" }}>church</span>
          </h1>
        </div>
        <h2 className={`${style.headline} text-6xl yellow-color`}>
          {parse(data.headline)}
        </h2>
        <div className="flex align-end" style={{ height: "100%" }}>
          <div className="col">
            <div className={`${style.about} inner`}>
              <p>{parse(data.bodytext)}</p>
              {data.cta_button_url.startsWith("/") ? (
                <Link to={data.cta_button_url} className="btn">
                  {data.cta_button_text}
                </Link>
              ) : (
                <a href={data.cta_button_url} className="btn">
                  {data.cta_button_text}
                </a>
              )}
            </div>
          </div>
          <div
            className={`${style.image} col bg`}
            style={{
              backgroundImage: `url('https://res.cloudinary.com/radiant-church/image/upload${data.image}')`,
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
