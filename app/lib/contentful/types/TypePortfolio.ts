import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypePortfolioFields {
  name: EntryFieldTypes.Symbol
  welcomeMessage: EntryFieldTypes.Symbol
  avatar: EntryFieldTypes.AssetLink
}

export type TypePortfolioSkeleton = EntrySkeletonType<
  TypePortfolioFields,
  'portfolio'
>
export type TypePortfolio<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePortfolioSkeleton, Modifiers, Locales>
