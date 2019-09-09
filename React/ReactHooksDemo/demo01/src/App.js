import React, { useState } from 'react'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>

      <div>
        <h2>useState 多状态声明</h2>
        <Example2></Example2>
      </div>

      <div>
        <h2>useEffect 代替常用生命周期函数</h2>
        <Example3></Example3>
      </div>

      <div>
        <h2>useContext 父子组件传值</h2>
        <Example4></Example4>
      </div>

      <div>
        <h2>useRedux 简单使用</h2>
        <Example5></Example5>
      </div>
    </div>
  )
}

export default App