import React, { useState } from "react";

function TextInput() {
  // 使用useState钩子来创建一个状态变量和更新函数
  const [inputValue, setInputValue] = useState("");

  // 处理输入框的值变化
  const handleChange = (event) => {
    // 限制输入长度为10个字符
    const value = event.target.value;
    if (value.length <= 10) {
      setInputValue(value);
    }
  };

  // 处理清空按钮点击事件
  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>输入框组件</h1>
      <input
        type="text"
        placeholder="请输入内容（最多10个字符）"
        value={inputValue}
        onChange={handleChange}
        className="input-box"
      />
      <button onClick={handleClear} className="clear-button">
        清空
      </button>
      <p className="display-text">你输入的内容是：</p>
      <p className="display-value">{inputValue}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TextInput />
    </div>
  );
}

export default App;
