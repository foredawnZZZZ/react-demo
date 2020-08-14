import React, { Component } from 'react'
import List from '../components/List'
import InputRef from '../components/InputRef'

class Hookdemo extends Component {
  constructor(props) {
    // 初始阶段
    super(props);
    console.log("constructor")
    this.state = {
      arr: [1,2,3,4],
      count: 10
    }
  }
  render() {
    // 唯一的必须的方法 展示的内容由render函数的返回值决定 SCU可控制
    console.log("render")
    return (
      <div>
        <p>{this.state.count}</p>
        <List arr={this.state.arr} />
        <InputRef />
        <button onClick={this.handleClick}>test</button>
      </div>
    )
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
    console.log(this.state.count);
  }
  handleClick = () => {
    let newCount = this.state.count;
    this.setState({
      count: ++newCount
    })
  }
  shouldComponentUpdate() {
    // 如果设置成为了false
    console.log("shouldComponentUpdate")
    return false
  }
  componentDidMount() {
    // 挂载
    console.log("componentDidMount")
  }
  componentWillUnmount() {
    // 销毁
    console.log("componentWillUnmount")
  }
}

/*


*/

export default Hookdemo;