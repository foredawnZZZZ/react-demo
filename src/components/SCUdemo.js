import React, { Component } from 'react'
const _ = require("lodash")

class SCUdemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 受到scu的控制 render函数在list无改变的状态下,只触发一次
    const { list } = this.props;
    console.log(list);
    return <ul>
    {list.map((item,index) => {
    return<li key={item.id}><span>{item.title} | {index}</span></li>
    })}
    </ul>
  }
  shouldComponentUpdate(nextProps,nextState) {
    // 默认是返回true的 父组件任意的state发生变化 子组件的render函数也会执行
    if(_.isEqual(nextProps.list,this.props.list)) {
      return false
    }
    return true;
  }
}

export default SCUdemo;