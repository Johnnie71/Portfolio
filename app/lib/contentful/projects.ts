import { TypeProjectsSkeleton, TypeProjectsFields } from "./types";
import { Entry, EntrySkeletonType } from "contentful";
import { ContentImage, parseConentfulContentImage } from "./contentfulImage";

type ProjectEntry = Entry<TypeProjectsSkeleton, undefined, string>

export interface Project {
  title: string,
  description: string,
  techStack: ContentImage[],
  demoURL?: string,
  picture: ContentImage,
  repo: string,
  liveSite: string,
  order: number
}

export const parseContentfulProjects = (entries?: Entry<EntrySkeletonType, undefined, string>[]): Project[] | null => {
  if (!entries || entries.length === 0) return null;

  const projectsEntries = entries.filter((entry): entry is ProjectEntry => entry.sys.contentType.sys.id === 'projects');

  const projects: Project[] = projectsEntries.map(project => {
    return {
      title: project.fields.title || '',
      description: project.fields.description || '',
      picture: parseConentfulContentImage(project.fields.picture),
      repo: project.fields.repo || '',
      demoURL: project.fields.demoURL || '',
      liveSite: project.fields.liveSite || '',
      order: project.fields.order || 0,
      techStack: project.fields.techStack?.map(tech => {
        // Ensure tech is defined and parse the tech image
        return parseConentfulContentImage(tech)
      }).filter(Boolean) as ContentImage[] // Filter out any null values and ensure proper type
    };
  }).sort((a, b) => {
    const order1 = a.order;
    const order2 = b.order;

    if (order1 > order2) return -1;

    if (order1 < order2) return 1;

    return 0
  }) as Project[]; // Filter out any null values from the projects array

  return projects.reverse();
}