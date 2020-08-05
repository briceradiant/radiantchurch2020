import { Link } from "gatsby"
import React from "react"
import ContextConsumer from "./Context"
import SVG from "react-inlinesvg"

import style from "./Header.module.scss"

const Header = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <header className={style.header}>
        <div className={style.wrapper}>
          <Link to="/" style={{ display: "block" }}>
            {data.logo === "logo-black" ? (
              <SVG src="/icon-black.svg" className={`${style.logo} black`} />
            ) : data.logo === "logo-inverse" ? (
              <SVG
                src="/icon-inverse.svg"
                className={`${style.logo} inverse`}
              />
            ) : (
              <SVG src="/icon.svg" className={`${style.logo} base`} />
            )}
          </Link>
        </div>
      </header>
    )}
  </ContextConsumer>
)

export default Header
