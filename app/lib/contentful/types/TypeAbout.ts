import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeAboutFields {
  about?: EntryFieldTypes.Text
  resume: EntryFieldTypes.AssetLink
}

export type TypeAboutSkeleton = EntrySkeletonType<TypeAboutFields, 'about'>
export type TypeAbout<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeAboutSkeleton, Modifiers, Locales>
