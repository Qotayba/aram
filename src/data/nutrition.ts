import type { StringKey } from './translations';

export type NutritionVariant = 'big' | 'sub' | 'default';

// Discriminated union: divider rows have no label/value
export type NutritionRow =
  | { id: string; variant: 'divider' }
  | { id: string; variant: NutritionVariant; labelKey: StringKey; value: string };

export const nutritionRows: NutritionRow[] = [
  { id: 'energy',      variant: 'big',     labelKey: 'nutEnergy',      value: '674 kcal' },
  { id: 'div1',        variant: 'divider' },
  { id: 'fat',         variant: 'default', labelKey: 'nutFat',         value: '57 g'     },
  { id: 'satFat',      variant: 'sub',     labelKey: 'nutSatFat',      value: '12.5 g'   },
  { id: 'transFat',    variant: 'sub',     labelKey: 'nutTransFat',    value: '0 g'      },
  { id: 'div2',        variant: 'divider' },
  { id: 'carbs',       variant: 'default', labelKey: 'nutCarbs',       value: '15.2 g'   },
  { id: 'sugar',       variant: 'sub',     labelKey: 'nutSugar',       value: '0 g'      },
  { id: 'div3',        variant: 'divider' },
  { id: 'protein',     variant: 'default', labelKey: 'nutProtein',     value: '25 g'     },
  { id: 'cholesterol', variant: 'default', labelKey: 'nutCholesterol', value: '0 mg'     },
  { id: 'fiber',       variant: 'default', labelKey: 'nutFiber',       value: '4 g'      },
  { id: 'div4',        variant: 'divider' },
  { id: 'iron',        variant: 'default', labelKey: 'nutIron',        value: '0.39 mg'  },
  { id: 'calcium',     variant: 'default', labelKey: 'nutCalcium',     value: '129 mg'   },
  { id: 'sodium',      variant: 'default', labelKey: 'nutSodium',      value: '70 mg'    },
];
