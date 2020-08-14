import React, { Component,Fragment } from 'react'

class Eventdemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    }
    // this是undefined,需要创建this指向 constructor是第一个执行的函数,而且也只执行一次 对事件进行初始化
    this.handleChange = this.handleChange.bind(this);
  };
  render() {
    return (
      <Fragment>
        {/* react事件是自封装的组合,跟DOM事件不同 */}
        <p>{ this.state.inputVal }</p>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
      </Fragment>
    )
  };
  handleChange(event) {
    // SyntheticEvent 合成事件
    console.dir(event.__proto__.constructor);
    console.log(event.target);
    
    console.log(event.nativeEvent);
    console.log(event.nativeEvent.target);

    console.log(event.currentTarget)
    console.log(event.nativeEvent.currentTarget)
    // this.setState({
    //   inputVal: event.target.value
    // })
  }
}

/*
  target和currentTarget
  在事件对象中,如果在没有冒泡的情况下,二者是相同的值
  如果出现在事件委托当中,就不同.target是触发事件的元素 而currentTarget则是绑定事件的元素

  合成事件区别于原生事件和vue事件(就是原生)
  通过判断target触发事件的元素 定位到触发元素的组件,在执行事件处理程序 传入react event进行操作访问

  为什么去选择合成事件
  1.为保证更好的跨平台!
  2.全部挂载document上, 减少内存消耗,避免频繁解绑(无线列表加载,瀑布流等)
  3.统一管理(事务机制) 做汇总
*/


export default Eventdemo