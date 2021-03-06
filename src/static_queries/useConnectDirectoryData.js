import {
    graphql,
    useStaticQuery
} from "gatsby"

export default function useConnectDirectoryData() {
    const data = useStaticQuery(graphql `
  query($eq: String = "Connect") {
    site {
      siteMetadata {
        description
      }
    }
    pagesJson(hero: {title: {eq: $eq}}) {
        hero {
          title
          hero_headline
          hero_background_color
          hero_font_color
        }        
      subpage_cards {
        title
        image
        url
      }
    }
  }
  
    `)
    return data
}