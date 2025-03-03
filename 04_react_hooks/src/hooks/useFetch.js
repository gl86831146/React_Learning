import { useState, useEffect } from "react";

// 自定义 Hook：useFetch，该 Hook 用于从指定的 URL 获取数据，并管理加载状态和错误信息
function useFetch(url) {
  // 使用 useState Hook 创建三个状态变量：
  // data 用于存储获取的数据；
  // loading 用于表示数据是否正在加载中；
  // error 用于存储可能发生的错误信息
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect Hook 来处理副作用操作，如数据获取
  useEffect(() => {
    // 定义一个异步函数 fetchData 用于获取数据
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result); // 添加这行来调试
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // 调用 fetchData 函数开始获取数据
    fetchData();
  }, [url]); // 依赖数组，只有当 url 发生变化时，才会重新执行 effect

  // 返回获取到的数据以及加载状态和错误信息，
  // 这样使用该 Hook 的组件就可以根据这些信息渲染 UI
  return { data, loading, error };
}

export default useFetch;
