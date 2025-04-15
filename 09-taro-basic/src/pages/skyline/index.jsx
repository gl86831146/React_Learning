import { View, Text, GridView, ListView, StickySection, ScrollView } from "@tarojs/components";
import "./index.scss";

const SkylinePage = () => {
  // 原有数据保持不变
  const gridData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `项目 ${i + 1}`,
    color: `hsl(${(i * 20) % 360}, 70%, 70%)`,
  }));

  const listData = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `列表项 ${i + 1}`,
    desc: `这是第 ${i + 1} 个列表项的描述信息`,
  }));

  // 移除未使用的手势处理函数
  const handleTouch = (e) => {
    console.log('触摸事件：', e.type);
  };

  return (
    <View className="skyline-page">
      {/* 触摸事件示例 */}
      <View className="section">
        <Text className="section-title">触摸事件示例</Text>
        <View
          className="gesture-container"
          onTouchStart={handleTouch}
          onTouchMove={handleTouch}
          onTouchEnd={handleTouch}
        >
          <Text className="gesture-text">尝试触摸、滑动</Text>
        </View>
      </View>

      {/* 吸顶布局示例 */}
      <View className="section">
        <Text className="section-title">吸顶布局</Text>
        <ScrollView 
          scrollY 
          className="scroll-container"
          style={{ height: '400px' }}
          enhanced
          bounces
        >
          <StickySection>
            <View 
              slot="header" 
              className="sticky-header"
              style={{ position: 'sticky', top: 0, zIndex: 100 }}
            >
              <Text>固定在顶部的标题</Text>
              <View className="sub-title">
                <Text>这部分会一直显示在顶部</Text>
              </View>
            </View>
            <View className="sticky-content">
              {Array.from({ length: 20 }, (_, i) => (
                <View key={i} className="sticky-item">
                  <Text>滚动内容 {i + 1}</Text>
                  <Text className="item-desc">这是可以滚动的内容区域</Text>
                </View>
              ))}
            </View>
          </StickySection>
        </ScrollView>
      </View>

      {/* GridView 示例 */}
      <View className="section">
        <Text className="section-title">GridView 组件</Text>
        <GridView
          className="grid-view"
          crossAxisCount={4}
          crossAxisGap={20}
          mainAxisGap={20}
        >
          {gridData.map((item) => (
            <View
              key={item.id}
              className="grid-item"
              style={{ backgroundColor: item.color }}
            >
              <Text className="grid-item-text">{item.title}</Text>
            </View>
          ))}
        </GridView>
      </View>

      {/* ListView 示例 */}
      <View className="section">
        <Text className="section-title">ListView 组件</Text>
        <ListView
          className="list-view"
          scrollY
          height={300}
          enhanced
          bounces
          enableBackToTop
        >
          {listData.map((item) => (
            <View key={item.id} className="list-item">
              <Text className="list-item-title">{item.title}</Text>
              <Text className="list-item-desc">{item.desc}</Text>
            </View>
          ))}
        </ListView>
      </View>
    </View>
  );
};

export default SkylinePage;
