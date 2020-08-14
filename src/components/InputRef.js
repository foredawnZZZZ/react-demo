import React from 'react'
// 受控组件需要操作DOM时 setState实现不了 不会改变state中的值 像富文本和文件上传这种
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpVal: "Fore Dawn"
    }
    this.ipt = React.createRef();
  }
  render() {
    return (
      <div>
        <input type="text" defaultValue={this.state.inpVal} ref={this.ipt} />
        <button onClick={this.alertName}>test ref</button>
      </div>
    )
  }
  alertName = () => {
    console.log(this.ipt.current.value);
  }
}

export default Input