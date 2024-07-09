import { TypeProjectsSkeleton, TypeProjectsFields } from "./types";
import { Entry, EntrySkeletonType } from "contentful";
import { ContentImage, parseConentfulContentImage } from "./contentfulImage";

type ProjectEntry = Entry<TypeProjectsSkeleton, undefined, string>

export interface Project {
  title: string,
  info: string,
  techStack: ContentImage[],
  url?: string,
  picture: ContentImage,
  repo: string
}

export const parseContentfulProjects = (entries?: Entry<EntrySkeletonType, undefined, string>[]): Project[] | null => {
  if (!entries || entries.length === 0) return null;

  const projectsEntries = entries.filter((entry): entry is ProjectEntry => entry.sys.contentType.sys.id === 'projects');

  const projects: Project[] = projectsEntries.map(project => {
    return {
      title: project.fields.title || '',
      info: project.fields.info || '',
      picture: parseConentfulContentImage(project.fields.picture),
      repo: project.fields.repo || '',
      url: project.fields.url || '',
      techStack: project.fields.techStack?.map(tech => {
        // Ensure tech is defined and parse the tech image
        return parseConentfulContentImage(tech)
      }).filter(Boolean) as ContentImage[] // Filter out any null values and ensure proper type
    };
  }).filter(Boolean) as Project[]; // Filter out any null values from the projects array

  return projects.reverse();
}