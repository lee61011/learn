import React, { useState } from 'react'
import Example2 from './Example2'
import Example3 from './Example3'

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
    </div>
  )
}

export default App