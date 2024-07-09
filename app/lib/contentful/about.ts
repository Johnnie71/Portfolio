import { TypeAboutSkeleton } from "./types";
import { Asset, Entry, EntrySkeletonType, } from "contentful";
import { contentfulClient } from "./contentfulClient";

type AboutEntry = Entry<TypeAboutSkeleton, undefined, string>;

interface ResumeFile {
  title: string,
  description: string,
  fileName: string,
  url: string,
}

export interface About {
  about: string,
  // resume: ResumeFile
}

export const parseConentfulAbout = (entries?: Entry<EntrySkeletonType, undefined, string>[]): About | null => {
  if (!entries || entries.length === 0) return null;

  const aboutEntry = entries.find(entry => entry.sys.contentType.sys.id === 'about') as AboutEntry | undefined;
  if(!aboutEntry) return null;

  const { about, resume } = aboutEntry.fields;

  if (!resume || resume.sys.type != 'Asset') return null;

  const asset = resume as Asset;

  // console.log(resume.fields.file.url)
  
  return {
    about: about || '',
    // resume: {
    //   title: typeof asset.fields.title === 'string' ? asset.fields.title : '',
    //   description: typeof asset.fields.description === 'string' ? asset.fields.description : '',
    //   fileName: asset.fields.file?.fileName === 'string' ? asset.fields.file.fileName : '',
    //   url: asset.fields.file?.url === 'string' ? asset.fields.file?.url : ''
    // }
  }
}