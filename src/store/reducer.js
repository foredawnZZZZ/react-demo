import { ADD_LIST_ITEM } from './actionTypes'

const defalutState = {
  iptVal: "",
  list: [{
      id: 0,
      title: "one test"
    },
    {
      id: 1,
      title: "two test"
    },
    {
      id: 2,
      title: "three test"
    },
    {
      id: 3,
      title: "four test"
    },
    {
      id: 4,
      title: "five test"
    }
  ]
}

export default (state = defalutState, action) => {
  if(action.type === ADD_LIST_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    console.log(newState);
  }
  return state;
}