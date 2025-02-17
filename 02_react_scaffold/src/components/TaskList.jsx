import React from "react";
const students = [
  { id: 111, name: "张三", score: 99 },
  { id: 111, name: "张三feng", score: 91 },
  { id: 111, name: "张三凤", score: 89 },
  { id: 111, name: "张三风", score: 95 },
];

const element = (
  <div>
    <h2>学生列表数据</h2>
    <div classNmae="item">
      {students
        .filter((item) => item.score > 90)
        .map((item) => {
          return (
            <div classNmae="item" key={item.id}>
              <h2>学号：{item.id}</h2>
              <h3>姓名：{item.name}</h3>
              <h1>分数：{item.score}</h1>
            </div>
          );
        })}
    </div>
  </div>
);
class TaskList extends React.Component {
  render() {
    return <div style={{ textAlign: "center" }}>{element}</div>;
  }
}
export default TaskList;
