import { TypePortfolioSkeleton } from '@/app/lib/contentful/types/TypePortfolio'
import { Entry, Asset } from 'contentful'

type HeaderContent = Entry<TypePortfolioSkeleton, undefined, string>

export interface HeaderData {
  name: string;
  welcomeMessage: string;
  avatar: Asset
}