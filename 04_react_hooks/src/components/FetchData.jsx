import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //使用useEffect Hook调用API
  useEffect(() => {
    //执行 fetch 请求，从 API 获取数据，会在组件加载完后执行一次
    fetch("https://api.xygeng.cn/one")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        //解析响应数据为 json 格式
        return response.json();
      })
      .then((json) => {
        if (json.code == 200 && json.data) {
          setData(json.data);
        } else {
          setError(json.error || "获取数据失败");
        }
      });
  }, []); //空依赖数组，表示这个 effect 只在组件挂载执行一次
  if (error) return <p>{error}</p>;

  if (!data) return <p>加载中。。。</p>;

  //数据成功加载，渲染数据
  return (
    <div>
      <p>来源:[data.origin]</p>
      <p>作者:[data.author]</p>
      <p>标签:[data.tag]</p>
      <p>内容:[data.content]</p>
    </div>
  );
};
export default FetchData;
