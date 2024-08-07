import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeHeroFields {
  name: EntryFieldTypes.Symbol
  welcomeMessage: EntryFieldTypes.Symbol
  avatar: EntryFieldTypes.AssetLink
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>
