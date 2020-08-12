import {
    graphql,
    useStaticQuery
} from "gatsby"

export default function useLiveStreamData() {
    const data = useStaticQuery(graphql `
  query {
    site {
      siteMetadata {
        description
      }
    }
    pagesJson(live_stream_iframe: {ne: null}) {
        hero {
            title
            hero_headline
            hero_font_color
            hero_background_color
        }
        live_stream_iframe
        blocks {
            title
            url
        }
    }
  }
  
    `)
    return data
}