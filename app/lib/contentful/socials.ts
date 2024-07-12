import { TypeSocialsSkeleton } from "./types";
import { Entry, EntrySkeletonType } from "contentful";
import { ContentImage, parseConentfulContentImage } from "./contentfulImage";

type SocialsEntry = Entry<TypeSocialsSkeleton, undefined, string>

export interface Social {
  site: string,
  icon: ContentImage,
  link: string
}

export const parseContentfulSocials = (entries?: Entry<EntrySkeletonType, undefined, string>[]): Social[] | null => {
  if (!entries || entries.length === 0) return null;

  const socialEntries = entries.filter((entry): entry is SocialsEntry => entry.sys.contentType.sys.id === 'socials');

  const socials: Social[] = socialEntries.map(social => {
    return {
      site: social.fields.site || '',
      icon: parseConentfulContentImage(social.fields.icon)!,
      link: social.fields.link || ''
    };
  });

  return socials
}