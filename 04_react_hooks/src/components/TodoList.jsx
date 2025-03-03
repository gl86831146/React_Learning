import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handlechange = (e) => {
    setInput(e.target.value);
  };
  const add = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  // 标记待办事项为已完成
  const todofinish = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handlechange}
        placeHolder="添加新的代办事项"
      />
      <button onClick={add}>添加</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => todofinish(index)}>已完成</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
