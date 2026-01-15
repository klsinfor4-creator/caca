
import { Cake } from './types';

export const CATEGORIES = ['All', 'Minimalist', 'Floral', 'Cartoon', 'Elegant'];

export const CAKES: Cake[] = [
  {
    id: '1',
    name: 'Blush Velvet Dream',
    price: 45,
    image: 'https://picsum.photos/seed/cake1/600/600',
    description: 'A smooth minimalist design with gold leaf accents.',
    category: 'Minimalist',
    colors: ['#FFC0CB', '#FFFFFF', '#FFD700']
  },
  {
    id: '2',
    name: 'Meadow Garden',
    price: 58,
    image: 'https://picsum.photos/seed/cake2/600/600',
    description: 'Adorned with hand-pressed edible wild flowers.',
    category: 'Floral',
    colors: ['#E0F2F1', '#81C784', '#F48FB1']
  },
  {
    id: '3',
    name: 'Cloud Nine',
    price: 39,
    image: 'https://picsum.photos/seed/cake3/600/600',
    description: 'Fluffy meringue textures in pastel shades.',
    category: 'Minimalist',
    colors: ['#E1F5FE', '#B3E5FC']
  },
  {
    id: '4',
    name: 'Midnight Sparkle',
    price: 65,
    image: 'https://picsum.photos/seed/cake4/600/600',
    description: 'Deep navy velvet with shimmering edible stars.',
    category: 'Elegant',
    colors: ['#1A237E', '#FFD700']
  },
  {
    id: '5',
    name: 'Berry Bliss',
    price: 52,
    image: 'https://picsum.photos/seed/cake5/600/600',
    description: 'Fresh seasonal berries nestled in chantilly cream.',
    category: 'Floral',
    colors: ['#FCE4EC', '#D81B60']
  },
  {
    id: '6',
    name: 'Playful Pastel',
    price: 48,
    image: 'https://picsum.photos/seed/cake6/600/600',
    description: 'Cute illustrations and cheerful sprinkles.',
    category: 'Cartoon',
    colors: ['#FFF9C4', '#F8BBD0', '#B2EBF2']
  }
];

export const FLAVORS = ['Classic Vanilla', 'Deep Chocolate', 'Red Velvet', 'Matcha Zen', 'Earl Grey Lavender'];
export const SIZES = ["4' (Lunchbox)", "6' (Small)", "8' (Regular)", "10' (Large)"];
