import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeProjectsFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  picture: EntryFieldTypes.AssetLink
  demoURL?: EntryFieldTypes.Symbol
  repo: EntryFieldTypes.Symbol
  techStack: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  liveSite?: EntryFieldTypes.Symbol
  order: EntryFieldTypes.Integer
}

export type TypeProjectsSkeleton = EntrySkeletonType<
  TypeProjectsFields,
  'projects'
>
export type TypeProjects<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProjectsSkeleton, Modifiers, Locales>
