import { Product } from './types'
import { audio } from './products/audio'
import { headsets } from './products/headsets'
import { notebooks } from './products/notebooks'
import { tablets } from './products/tablets'
import { cook } from './products/cook'

export const products: Product[] = [
  ...audio,
  ...headsets,
  ...notebooks,
  ...tablets,
  ...cook,
]
