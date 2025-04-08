import useCounterStore from '../store/counterStore'

function CounterZustand() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  return (
    <div>
      <h2>计数器: {count}</h2>
      <button onClick={increment}>增加</button>
      <button onClick={decrement}>减少</button>
    </div>
  )
}

export default CounterZustand