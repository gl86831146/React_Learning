import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>计数器: {count}</h2>
      <button onClick={increment}>增加</button>
      <button onClick={decrement}>减少</button>
    </div>
  )
}

export default Counter