import { CHANGE_INPUT_VALUE, DEL_LIST_ITEM } from './actionTypes';

export const getChangeValAction = (val) => ({
  type: CHANGE_INPUT_VALUE,
  val
})

export const getDelItemAction = (index) => ({
  type: DEL_LIST_ITEM,
  index
})