import {
  graphql,
  useStaticQuery
} from "gatsby"

export default function useHomeData() {
  const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          description
        }
      }        
      pagesJson(home_hero: {headline: {ne: null}}) {
        home_hero {
          bodytext
          cta_button_text
          cta_button_url
          headline
          image
        }
        home_feature_1 {
          home_feature_bodytext
          home_feature_cta_text
          home_feature_cta_url
          home_feature_image
          home_feature_headline
        }        
        home_feature_2 {
          home_feature_bodytext
          home_feature_cta_text
          home_feature_cta_url
          home_feature_image
          home_feature_headline
        }  
        home_feature_3 {
          home_feature_bodytext
          home_feature_cta_text
          home_feature_cta_url
          home_feature_headline
          home_feature_images
        }                
        seo_title
        seo_description               
      }     
    }
  `)
  return data
}