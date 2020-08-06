import {
    graphql,
    useStaticQuery
} from "gatsby"

export default function useOurDnaData() {
    const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          description
        }
      }
      pagesJson(dna_images: { ne: null }) {
        hero {
          title
          hero_headline
          hero_background_color
          hero_font_color
        }
        dna_images
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