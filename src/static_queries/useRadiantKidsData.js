import {
    graphql,
    useStaticQuery
} from "gatsby"

export default function useAboutUsData() {
    const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          description
        }
      }
      pagesJson(radiant_kids_imags: { ne: null }) {
        hero {
          title
          hero_headline
          hero_background_color
          hero_font_color
        }
        radiant_kids_imags
        overview {
            headline
            bodycopy
        }
        first_visit{
            headline
            bodycopy
            info_boxes
            image
        }
        check_in {
            headline
            left_column_bodycopy
            right_column_bodycopy
        }
        parents_viewing_room {
            headline
            bodycopy
        }
        seo_title
        seo_description
      }
    }
  `)
    return data
}