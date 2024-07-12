import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeSocialsFields {
  site: EntryFieldTypes.Symbol
  icon: EntryFieldTypes.AssetLink
  link: EntryFieldTypes.Symbol
}

export type TypeSocialsSkeleton = EntrySkeletonType<
  TypeSocialsFields,
  'socials'
>
export type TypeSocials<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSocialsSkeleton, Modifiers, Locales>
