import React, { Component } from "react"

class JSXdemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "FORE DAWN",
      src: "11111",
      styleData: {
        "fontSize": "40px"
      },
      list: [
        {id:"id-1",title:"Mike"},
        {id:"id-2",title:"Arthur"},
        {id:"id-3",title:"John"}
      ],
      flag: true
    }
  };
  
  render() {
    // // 变量与插值
    // const p = <p>{ this.state.name }</p>
    // return p
    // // 嵌套子元素
    // const UserInfo = <div>
    //   <p>userName: {this.state.name}</p>
    //   <img src={this.state.src} alt="img"/>
    // </div>
    // return UserInfo
    // // class
    // const ClassNames = <div className="title">class是关键字 要用className</div>
    // return ClassNames
    // // style
    // const StyleNames = <div style={this.state.styleData}>设置style</div>
    // return StyleNames
    // // 列表渲染
    // const List = <ul>
    //   {
    //     this.state.list.map((item,index) => {
    //       return <li key={item.id}>{ "序号:" + index + ",My name is  " + item.title }</li>
    //     })
    //   }
    // </ul>
    // return List
    // 条件渲染
    const Button1 = <button onClick={this.handleClick}>{this.state.name ? "激活" : "停用"}</button>
    const Button2 = <button>停用</button>
    if(this.state.flag) {
      return Button1
    } else {
      return Button2
    }
  };
  handleClick = () => {
    this.setState({
      flag: false
    })
  }
}

export default JSXdemo