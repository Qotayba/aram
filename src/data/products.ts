import tahini500g from '../assets/products/tahini-500g.png';
import tahini1kg from '../assets/products/tahini-1kg.png';
import tahini17kg from '../assets/products/tahini-17kg.png';
import type { StringKey } from './translations';

export interface Product {
  id: string;
  weight: string;
  imageSrc: string;
  imageAlt: string;
  badgeKey: StringKey;
  nameKey: StringKey;
  descKey: StringKey;
  featured: boolean;
  wholesale: boolean;
  tags: StringKey[];
}

export const products: Product[] = [
  {
    id: '500g',
    weight: '500 g',
    imageSrc: tahini500g,
    imageAlt: 'Aram Premium Tahini 500g jar',
    badgeKey: 'p1badge',
    nameKey: 'p1name',
    descKey: 'p1desc',
    featured: false,
    wholesale: false,
    tags: ['tagKosher', 'tagNoAdd'],
  },
  {
    id: '1kg',
    weight: '1 kg',
    imageSrc: tahini1kg,
    imageAlt: 'Aram Premium Tahini 1kg jar',
    badgeKey: 'p2badge',
    nameKey: 'p2name',
    descKey: 'p2desc',
    featured: true,
    wholesale: false,
    tags: ['tagKosher', 'tagNoAdd'],
  },
  {
    id: '17kg',
    weight: '17 kg',
    imageSrc: tahini17kg,
    imageAlt: 'Aram Premium Tahini 17kg bulk pail',
    badgeKey: 'p3badge',
    nameKey: 'p3name',
    descKey: 'p3desc',
    featured: false,
    wholesale: true,
    tags: ['tagKosher', 'tagNoAdd'],
  },
];
