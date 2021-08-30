import { createAction, props } from '@ngrx/store';
import { IProductInfo } from '../data-types/product-info.interface';

export const add = createAction(
  '[Product Card] Add Fav',
  props<{ newProduct: IProductInfo }>()
);
export const remove = createAction(
  '[Product Card] Remove Fav',
  props<{ id: number }>()
);
export const reset = createAction('[Product Card] Reset Fav List');
