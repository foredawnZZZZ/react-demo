import React from 'react';
// 函数组件就是一个纯函数 输入props输出JSX. 没有constructor,没有实例,hooks,state
const List = (props) => {
  const { arr } = props;
  return <ul>
    { arr.map((item,index) => {
      return <li key={index}>{ item }</li>
    }) }
  </ul>
}

export default List