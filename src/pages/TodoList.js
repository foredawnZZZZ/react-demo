import React,{ Component } from 'react';
import Store from '../store';
import { getAddItemAction } from '../store/actionCreators';
import { ADD_LIST_ITEM } from '../store/actionTypes';
// import Tlist from '../components/Tlist';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    this._handleValChange = this._handleValChange.bind(this);
    this._handleAddItem = this._handleAddItem.bind(this);
    this._handleStoreChange = this._handleStoreChange.bind(this);
  }
  componentDidMount() {
    Store.subscribe(this._handleStoreChange)
  }
  render() {
    // return (<Tlist list={this.state.list}></Tlist>)
    const { list } = this.state;
    return (
      <div>
        <input type="text" onChange={this._handleValChange}/>
        <button onClick={this._handleAddItem}>ADD ITEM</button>
        <ul>
          {list.map((item,index) => {
            return <li key={item.id}>{item.title} ---- {index}<button onClick={() => this._handleRemoveItem(index)}>ADD Item</button></li>
          })}
        </ul>
      </div>
    )
  }
  _handleStoreChange() {
    this.setState(Store.getState())
  }
  _handleValChange(e) {
    let newVal = e.target.value;
    this.setState({
      iptVal: newVal
    })
  }
  _handleAddItem() {
    const action = {
      type:ADD_LIST_ITEM,
      item: this.state.iptVal
    }
    Store.dispatch(action);
  }
  _handleRemoveItem(idx) {

  }
}

export default TodoList;