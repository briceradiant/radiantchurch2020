import { graphql, useStaticQuery } from "gatsby"

export default function useAboutUsData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
      pagesJson(about_images: { ne: null }) {
        hero {
          title
          hero_headline
          hero_background_color
          hero_font_color
        }
        about_images
        pillars {
          bodycopy
          extended_bodycopy
          headline
          subheadline
        }
        seo_title
        seo_description
      }
    }
  `)
  return data
}
