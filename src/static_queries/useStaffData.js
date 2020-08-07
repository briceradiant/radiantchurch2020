import {
    graphql,
    useStaticQuery
} from "gatsby"

export default function useStaff() {
    const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          description
        }
      }
      pagesJson(personnel: {elemMatch: {name: {ne: null}}}) {
        hero {
          title
          hero_headline
          hero_background_color
          hero_font_color
        }
        personnel {
            name
            role
            email
            headshot
            bio
        }
        seo_title
        seo_description
      }
    }
  `)
    return data
}