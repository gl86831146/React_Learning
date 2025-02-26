import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("123");

  const handleInputChange = (value) => {
    //更新组件达到状态
    setInputValue(value);
  };
  return (
    <>
      <h2>输入的值是：{inputValue}</h2>
      <Input onInputChange={handleInputChange} />
    </>
  );
};

export default InputParent;
