import {
    graphql,
    useStaticQuery
} from "gatsby"

export default function useEventsData() {
    const data = useStaticQuery(graphql `
    query ($eq: String = "Upcoming Events") {
    site {
        siteMetadata {
        description
        }
    }
    allEventsJson {
        edges {
        node {
            title
            start_date(fromNow: false)
            end_date(fromNow: false)
            description
            recurring_event
            recurring_frequency
            recurring_end_date(fromNow: false)
        }
        }
    }
    pagesJson(hero: {title: {eq: $eq}}) {
        hero {
            title
            hero_headline
            hero_font_color
            hero_background_color
        }        
        seo_title
        seo_description
    }
    }
  `)
    return data
}