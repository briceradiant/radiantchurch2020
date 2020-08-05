import { graphql, useStaticQuery } from "gatsby"

export default function useHomeData() {
  const data = useStaticQuery(graphql`
    query {
      pagesJson {
        home_hero {
          bodytext
          cta_button_text
          cta_button_url
          headline
          image
        }
      }
    }
  `)
  return data.pagesJson
}
