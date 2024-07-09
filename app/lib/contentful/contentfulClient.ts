import { createClient } from 'contentful'
import { Hero, parseConentfulHero } from './hero'
import { About, parseConentfulAbout } from './about'
import { Project, parseContentfulProjects } from './projects'

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env

// This is the standard Contentful client. It fetches
// content that has been published.
const client = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_ACCESS_TOKEN as string
})

// This is a Contentful client that's been configured
// to fetch drafts and unpublished content.
const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: 'preview.contentful.com'
})

// This little helper will let us switch between the two
// clients easily:
export const contentfulClient = ({preview = false}) => {
  if (preview) {
    return previewClient
  }
  return client
}

// Fetch all entries from the contenful space
export const fetchAllEntries = async (preview: boolean = false): Promise<{
  heroData: Hero | null,
  aboutData: About | null,
  projectsData: Project[] | null
}> => {
  const client = contentfulClient({ preview })
  const response = await client.getEntries()

  const heroData = parseConentfulHero(response.items)
  const aboutData = parseConentfulAbout(response.items)
  const projectsData = parseContentfulProjects(response.items)

  return { heroData, aboutData, projectsData}
}