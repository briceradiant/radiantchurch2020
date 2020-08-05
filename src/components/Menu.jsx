import React from "react"
import { Link } from "gatsby"
import ContextConsumer from "./Context"
import SVG from "react-inlinesvg"

import style from "./Menu.module.scss"

const Menu = props => {
  const { location } = props

  const menuItems = [
    {
      title: "About Us",
      url: "/about-us",
      children: [
        {
          title: "Meet our Staff",
          url: "/staff",
        },
        {
          title: "Radiant Kids",
          url: "/radiant-kids",
        },
        {
          title: "Become a Member",
          url: "/become-a-member",
        },
        {
          title: "Our DNA",
          url: "/dna",
        },
        {
          title: "What to Expect",
          url: "/what-to-expect",
        },
        {
          title: "What We Believe",
          url: "/what-we-believe",
        },
      ],
    },
    {
      title: "Connect",
      url: "/connect",
    },
    {
      title: "Sermons",
      url: "/sermons",
    },
    {
      title: "Resources",
      url: "/resources",
    },
  ]

  return (
    <ContextConsumer>
      {({ data, set }) => {
        return (
          <>
            <span
              className={`${style.hamburger} ${
                data.menuOpen ? style.open : ""
              }${
                data.hamburgerColor === "white" ? " white-color" : " base-color"
              } gilroy-light-font text-xl show_860`}
              onClick={() => {
                set({ menuOpen: !data.menuOpen })
              }}
            >
              menu
              {data.hamburgerColor === "white" ? (
                <SVG
                  src="/hamburger-white.svg"
                  style={{ marginLeft: "15px" }}
                />
              ) : (
                <SVG src="/hamburger.svg" style={{ marginLeft: "15px" }} />
              )}
            </span>
            <span
              className={`${style.hamburgerClose} ${
                data.menuOpen ? style.open : ""
              } gilroy-light-font text-xl show_860`}
              onClick={() => {
                set({ menuOpen: !data.menuOpen })
              }}
            >
              close
              <SVG src="/hamburger-close.svg" style={{ marginLeft: "15px" }} />
            </span>

            <div className={`${style.menu} ${data.menuOpen ? style.open : ""}`}>
              <div className={style.wrapper}>
                <ul>
                  {menuItems.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${style.menu_item} text-4xl lowercase gilroy-light-font`}
                      >
                        <Link to={item.url} data-num={"0" + (index + 1)}>
                          {item.title}
                        </Link>
                        {item.children && (
                          <ul className="flex wrap">
                            {item.children.map((child, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`${style.child_menu_item} text-xl`}
                                >
                                  <Link to={child.url}>{child.title}</Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </>
        )
      }}
    </ContextConsumer>
  )
}

export default Menu
