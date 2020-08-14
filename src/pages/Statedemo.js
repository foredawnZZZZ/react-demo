import React, { Component } from 'react'
import SCUdemo from '../components/SCUdemo'
// 跟vue的异步组件编写方式差不多... 必须添加一个React.Suspense然后设置一个fallback属性加载中的提示
const ContentDemo = React.lazy(() => import('../components/ContentDemo'))


class StateDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testList: [
        {id: "00X1",title: "Mike"},
        {id: "00X2",title: "Arthur"},
        {id: "00X3",title: "John"}
      ],
      inpVal: "",
      testNum: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTest = this.handleTest.bind(this)
  }
  render() {
    return (
      <div>
        <React.Suspense fallback={<div>123</div>}>
          <ContentDemo />
        </React.Suspense>
        <SCUdemo list={this.state.testList}></SCUdemo>
        <button onClick={this.handleClick}>TEST</button>
        <br/>
        <input type="text" value={this.state.inpVal} onChange={this.handleChange} />
        <br/>
        <br/>
        <br/>
        {/* <button onClick={this.handleTest}>TEST STATE</button> */}
      </div>
    )
  }
  handleClick() {
    if(!this.state.inpVal) return
    // let newObj = {
    //   title: this.state.inpVal,
    //   id:"00X4"
    // }
    // let newTestList = this.state.testList.concat(newObj)

    // 注意不能用非纯函数的方法直接对state里的数组进行操作 setState就无意义了 push的时候就已经把state中的数据给改掉了
    this.state.testList.push({
      title: this.state.inpVal,
      id: "00X4"
    })
    this.setState({
      testList: this.state.testList
    })
  }
  handleChange(e) {
    let newVal = e.target.value;
    this.setState({
      inpVal: newVal
    })
  }
  /*
    setState在合成事件和钩子函数中是异步的 因为他进入了batchUpdata机制 也就是react能够管理的入口
    (并不是基于eventloop的 而是在执行过程中合成事件和钩子调用顺序在更新之前,所以拿不到最新的值)
    setState在原生事件和定时器当中是同步的
  */
  handleTest() {
    // console.log(1,this.state.testNum)
    // this.setState({
    //   testNum: 1
    // })
    // this.setState({
    //   testNum: 2
    // })
    // console.log(2,this.state.testNum)
    // this.setState({
    //   testNum: 3
    // })
    // console.log(3,this.state.testNum)
    // this.setState({
    //   testNum: 4
    // })
    // console.log(4,this.state.testNum)
    // isBatchingUpdatas = true 就走异步
    this.setState({
      testNum: 1
    })
    this.setState({
      testNum: 2
    })
    this.setState({
      testNum: 3
    })
    this.setState({
      testNum: 4
    })
    // isBatchingUpdatas = false
    console.log(this.state.testNum);
  }
  componentDidMount() {
    // console.log(1,this.state.testNum)
    // this.setState({
    //   testNum: 1
    // })
    // this.setState({
    //   testNum: 2
    // })
    // console.log(2,this.state.testNum)
    // this.setState({
    //   testNum: 3
    // })
    // console.log(3,this.state.testNum)
    // this.setState({
    //   testNum: 4
    // })
    // console.log(4,this.state.testNum)
    // setTimeout(() => {
    //   this.setState({
    //     testNum: 1
    //   })
    //   console.log(1,this.state.testNum)
    // },20)
    // setTimeout(() => {
    //   this.setState({
    //     testNum: 2
    //   })
    //   console.log(2,this.state.testNum)
    // },2000)
    document.body.addEventListener("click",this.handleTest);
  }
}
/* 
  不可变值(函数式编程纯函数) 可能是异步更新(定时器dom事件 同步) 可能会被合并
  给一个稳定的输入就会有一个稳定的输出
  数组方法(slice,concat) 对象Object.assgin  push pop等方法就会修改原数组

  
  当调用setState时,会将新的state存入一个pending队列里 去判断是否是异步命中还是同步命中
*/

export default StateDemo