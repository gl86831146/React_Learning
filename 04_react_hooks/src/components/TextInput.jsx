import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("abc");

  const handlechange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handlechange} />
      <p>当前输入的内容</p>
    </div>
  );
};

export default TextInput;
