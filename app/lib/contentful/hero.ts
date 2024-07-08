import { TypeHeroSkeleton } from "./types";
import { Entry, EntrySkeletonType } from "contentful";
import { contentfulClient } from "./contentfulClient";
import { ContentImage, parseConentfulContentImage } from "./contentImage";

type HeroEntry = Entry<TypeHeroSkeleton, undefined, string>

export interface Hero {
  name: string,
  welcomeMessage: string,
  avatar: ContentImage
}

export const parseConentfulHero = (entries?: Entry<EntrySkeletonType, undefined, string>[]): Hero | null => {
  if (!entries || entries.length === 0) return null;

  const heroEntry = entries.find(entry => entry.sys.contentType.sys.id === 'hero') as HeroEntry | undefined;
 
  return {
    name: heroEntry?.fields.name || '',
    welcomeMessage: heroEntry?.fields.welcomeMessage || '',
    avatar: parseConentfulContentImage(heroEntry?.fields.avatar) || { src: '', alt: '', width: 0, height: 0 },
  }
}