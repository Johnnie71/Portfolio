import { TypeAboutSkeleton } from "./types";
import { Entry, EntrySkeletonType, } from "contentful";
import { Text as TextType } from '@contentful/rich-text-types';

type AboutEntry = Entry<TypeAboutSkeleton, undefined, string>;

export interface About {
  about: string[],
}

export const parseConentfulAbout = (entries?: Entry<EntrySkeletonType, undefined, string>[]): About | null => {
  if (!entries || entries.length === 0) return null;

  const aboutEntry = entries.find(entry => entry.sys.contentType.sys.id === 'about') as AboutEntry | undefined;

  if(!aboutEntry) return null;

  const aboutContent = aboutEntry.fields.about.content;
  const aboutSection: string[] = aboutContent.map(block => {
    return block.content
    .filter((node): node is TextType => node.nodeType === 'text') // Type guard to ensure node is Text
    .map(node => node.value)
    .join('')
  })
  
  return {
    about: aboutSection || '',
  }
}