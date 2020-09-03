import { ADD_LIST_ITEM } from './actionTypes';
export const getAddItemAction = (item) => ({
  type: ADD_LIST_ITEM,
  item
})