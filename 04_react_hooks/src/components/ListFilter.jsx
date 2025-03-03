import { useMemo } from "react";

// ListFilter 组件，用于根据给定的查询条件过滤列表项
const ListFilter = ({ items, query }) => {
  // 使用 useMemo Hook 来缓存过滤后的列表项
  // 当 items 或 query 发生变化时，才会重新计算
  const filteredItems = useMemo(() => {
    // 使用 filter 方法筛选出包含查询条件的列表项
    // 将列表项和查询条件都转换为小写，以实现不区分大小写的搜索
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]); // 依赖数组

  // 渲染组件，显示过滤后的列表项
  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item}>{item}</li> // 为每个列表项生成一个列表项元素
      ))}
    </ul>
  );
};

export default ListFilter;
