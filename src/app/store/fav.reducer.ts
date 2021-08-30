import { createReducer, on } from '@ngrx/store';
import { IProductInfo } from '../data-types/product-info.interface';
import { add, remove, reset } from './fav.actions';

export const initialState = [];

const _favReducer = createReducer(
  initialState,
  on(add, (state, payload) => {
    return state.concat(payload.newProduct);
  }),
  on(remove, (state, payload) => {
    return (state = state.filter((product) => product.id !== payload.id));
  })
);

export function favReducer(state, action) {
  // console.log(state, action);
  return _favReducer(state, action);
}
