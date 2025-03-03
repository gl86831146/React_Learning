import { useRef } from "react";
import Counter2 from "./Counter2";

const Parent2 = () => {
  const counterRef = useRef(); // 创建一个 ref 来引用 Counter2 组件

  return (
    <div>
      <Counter2 ref={counterRef} /> {/* 将 ref 传递给 Counter2 组件 */}
      <button onClick={() => counterRef.current.reset()}>
        Reset Count {/* 按钮文本 */}
      </button>
    </div>
  );
};

export default Parent2;
