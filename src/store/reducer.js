import { ADD_LIST_ITEM, CHANGE_INPUT_VALUE } from './actionTypes';

const defaultState = {
  iptVal: "",
  list: [1, 2, 3, 4, 7, 65]
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.iptVal = action.val;
    return newState;
  }
  if(action.type === ADD_LIST_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.iptVal);
    newState.iptVal = "";
    return newState;
  }
  if(action.type === DEL_LIST_ITEM) {
    
  }
  return state
}