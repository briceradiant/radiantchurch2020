import React from "react"
import { Link } from "gatsby"
import ContextConsumer from "./Context"
import VizSensor from "react-visibility-sensor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import SVG from "react-inlinesvg"

import style from "./Footer.module.scss"

const Footer = props => {
  // const { bg } = props
  return (
    <ContextConsumer>
      {({ data, set }) => (
        <VizSensor
          partialVisibility
          minTopValue={data.winHeight}
          onChange={isVisible => {
            isVisible
              ? set({ hamburgerColor: "white", logo: "logo-inverse" })
              : set({ hamburgerColor: "black", logo: "logo" })
          }}
        >
          <footer className="pad_lg base-bg white-color">
            <div className="wrapper">
              <div className={`${style.grid} flex grid three`}>
                <div className={`${style.left} grid-item one-third flex`}>
                  <div className="inner">
                    <SVG src="/logo.svg" />
                    <p
                      className="gilroy-light-font text-sm"
                      style={{ lineHeight: "1.5" }}
                    >
                      In the same way, let your light shine before others, so
                      that they may see your good works and give glory to your
                      Father in heaven. - Matthew 5:16
                    </p>
                    <div className="flex align-center">
                      <a
                        href="mailto:philip@radiantcharleston.com"
                        className="btn transparent"
                      >
                        Email Us
                      </a>
                      <div
                        className={`${style.social} flex nowrap yellow-color`}
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.middle} grid-item one-third flex justify-center`}
                >
                  <div
                    className="inner"
                    style={{ position: "relative", maxWidth: "400px" }}
                  >
                    <SVG src="/footer-arrow.svg.svg" />
                    <p className="caps yellow-color text-sm">
                      subscribe to our newsletter
                    </p>
                    <ul className={`${style.links} flex wrap`}>
                      <li className={`${style.item} gilroy-light-font text-sm`}>
                        <Link to="/" className="lowercase">
                          Link Title 1
                        </Link>
                      </li>
                      <li className={`${style.item} gilroy-light-font text-sm`}>
                        <Link to="/" className="lowercase">
                          Link Title 2
                        </Link>
                      </li>
                      <li className={`${style.item} gilroy-light-font text-sm`}>
                        <Link to="/" className="lowercase">
                          Link Title 3
                        </Link>
                      </li>
                      <li className={`${style.item} gilroy-light-font text-sm`}>
                        <Link to="/" className="lowercase">
                          Link Title 4
                        </Link>
                      </li>
                      <li className={`${style.item} gilroy-light-font text-sm`}>
                        <Link to="/" className="lowercase">
                          Link Title 5
                        </Link>
                      </li>
                      <li className={`${style.item} gilroy-light-font text-sm`}>
                        <Link to="/" className="lowercase">
                          Link Title 6
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${style.right} grid-item one-third flex justify-end`}
                >
                  <div className="inner text-right" style={{ width: "100%" }}>
                    <form
                      action="#"
                      className="flex wrap justify-end"
                      style={{ width: "100%" }}
                    >
                      <div className="flex">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className={`${style.email} gilroy-light-font text-sm white-color`}
                          placeholder="email address"
                        />
                      </div>
                      <div
                        className="submit transparent"
                        style={{ padding: 0, marginLeft: "25px" }}
                      >
                        <input
                          type="submit"
                          value="Subscribe"
                          className="caps"
                          style={{
                            padding: "15px 45px 15px 25px",
                            width: "100%",
                            height: "100%",
                            color: "inherit",
                            background: "inherit",
                          }}
                        />
                      </div>
                    </form>
                    <div
                      className={`${style.address} inner text-left`}
                      style={{ display: "inline-block" }}
                    >
                      <p
                        className="caps yellow-color text-sm"
                        style={{ marginBottom: "15px" }}
                      >
                        Address
                      </p>
                      <p
                        className="text-sm gilroy-light-font"
                        style={{ lineHeight: "1.6" }}
                      >
                        2427 Midland Park Road
                        <br />
                        North Charleston, SC 29406
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </VizSensor>
      )}
    </ContextConsumer>
  )
}

export default Footer
