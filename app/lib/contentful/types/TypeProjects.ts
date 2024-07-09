import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeProjectsFields {
  title: EntryFieldTypes.Symbol
  info: EntryFieldTypes.Text
  picture: EntryFieldTypes.AssetLink
  url?: EntryFieldTypes.Symbol
  repo: EntryFieldTypes.Symbol
  techStack: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeProjectsSkeleton = EntrySkeletonType<
  TypeProjectsFields,
  'projects'
>
export type TypeProjects<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProjectsSkeleton, Modifiers, Locales>
