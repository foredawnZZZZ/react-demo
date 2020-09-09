import React from 'react';
import { connect } from 'react-redux';
import { getChangeValAction } from '../store/actionCreators';
import { ADD_LIST_ITEM } from '../store/actionTypes'

const TodoList = (props) => {
  const { value, list, handleAddItem, handleDelItem, handleChange } = props;
  return (
    <div>
      <input type="text" value={ value } onChange={ handleChange } />
      <button onClick={ handleAddItem }>test</button>
      <ul>
        { list.map((item,index) => {
            return <li key={ index } onClick={ () => { handleDelItem(index) } }>{ item }</li>
          }) 
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.iptVal,
    list: state.list
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    handleDelItem(idx) {
      
    },
    handleAddItem() {
      const action = {
        type: ADD_LIST_ITEM
      }
      dispatch(action);
    },
    handleChange(e) {
      const action = getChangeValAction(e.target.value);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(TodoList);