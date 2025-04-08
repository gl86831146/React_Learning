import Counter from './components/Counter'
import Profile from './components/Profile'
import TodoList from './components/TodoList'
import UserProvider from './components/UserProvider'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'
import CounterZustand from './components/CountZustand'

function App() {
  return (
    // <UserProvider>
    // <div>
    // {/* //     <h1>React 计数器示例</h1>
    // //     <Counter />
    // //     <Profile />
    // //     <TodoList /> */} 
    //      <UserProfile />
    //     <UpdateUser />
    //   </div>
    // </UserProvider> 
    <CounterZustand />
  )
}

export default App