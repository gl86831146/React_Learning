import { View, Text, Icon, Progress, RichText, ScrollView } from "@tarojs/components";
import { useState } from 'react';
import Taro from '@tarojs/taro';
import "./index.scss";

const Basic = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(Array.from({ length: 20 }, (_, i) => `列表项 ${i + 1}`));

  // RichText示例内容
  const richTextNodes = [{
    name: "div",
    attrs: {
      class: "rich-text-wrapper"
    },
    children: [{
      type: "text",
      text: "这是一段富文本内容，支持"
    }, {
      name: "strong",
      children: [{
        type: "text",
        text: "加粗"
      }]
    }, {
      type: "text",
      text: "和"
    }, {
      name: "span",
      attrs: {
        style: "color: red;"
      },
      children: [{
        type: "text",
        text: "自定义样式"
      }]
    }]
  }];

  // 处理下拉刷新
  const handleRefresh = async () => {
    if (refreshing) return;
    setRefreshing(true);
    try {
      // 模拟请求数据
      await new Promise(resolve => setTimeout(resolve, 1000));
      setList(Array.from({ length: 20 }, (_, i) => `刷新后的列表项 ${i + 1}`));
      Taro.showToast({
        title: '刷新成功',
        icon: 'success'
      });
    } catch (error) {
      Taro.showToast({
        title: '刷新失败',
        icon: 'error'
      });
    }
    setRefreshing(false);
  };

  // 处理上拉加载
  const handleLoadMore = async () => {
    if (loading) return;
    setLoading(true);
    try {
      // 模拟加载更多数据
      await new Promise(resolve => setTimeout(resolve, 1000));
      const moreItems = Array.from({ length: 10 }, (_, i) => `新增列表项 ${list.length + i + 1}`);
      setList(prev => [...prev, ...moreItems]);
    } catch (error) {
      Taro.showToast({
        title: '加载失败',
        icon: 'error'
      });
    }
    setLoading(false);
  };

  return (
    <View className="basic">
      {/* Icon组件示例 */}
      <View className="section">
        <View className="section-title">Icon示例</View>
        <View className="icon-list">
          <View className="icon-item">
            <Icon size="30" type="success" />
            <Text className="icon-name">success</Text>
          </View>
          <View className="icon-item">
            <Icon size="30" type="info" />
            <Text className="icon-name">info</Text>
          </View>
          <View className="icon-item">
            <Icon size="30" type="warn" color="#ff9900" />
            <Text className="icon-name">warn</Text>
          </View>
          <View className="icon-item">
            <Icon size="30" type="waiting" />
            <Text className="icon-name">waiting</Text>
          </View>
        </View>
      </View>

      {/* ScrollView示例 */}
      <View className="section">
        <View className="section-title">ScrollView示例</View>
        <View className="scroll-container">
          <ScrollView
            className="scroll-view"
            scrollY
            refresherEnabled
            refresherTriggered={refreshing}
            refresherThreshold={45}
            refresherBackground="#f5f5f5"
            onRefresherRefresh={handleRefresh}
            onScrollToLower={handleLoadMore}
            lowerThreshold={50}
            style={{ height: '300px' }}
          >
            {list.map((item, index) => (
              <View key={index} className="scroll-item">
                <View className="item-content">
                  <Text className="item-text">{item}</Text>
                </View>
              </View>
            ))}
            {loading && (
              <View className="loading-wrapper">
                <Text className="loading-text">加载中...</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>

      {/* Text组件示例 */}
      <View className="section">
        <View className="section-title">Text示例</View>
        <View className="text-list">
          <Text className="text-item" selectable>可选择的文本</Text>
          <Text className="text-item" space="ensp">Text 组件支持 空格</Text>
          <Text className="text-item" decode>&lt;开启解码&gt;</Text>
          <Text className="text-item text-ellipsis">这是一段很长的文本，超出部分会显示省略号...</Text>
        </View>
      </View>

      {/* Progress组件示例 */}
      <View className="section">
        <View className="section-title">Progress示例</View>
        <View className="progress-list">
          <Progress percent={20} showInfo strokeWidth={4} />
          <Progress percent={40} strokeWidth={4} active />
          <Progress percent={60} strokeWidth={4} activeColor="#ff9900" />
          <Progress percent={80} strokeWidth={4} activeColor="#13CE66" backgroundColor="#FFE5E5" />
        </View>
      </View>

      {/* RichText组件示例 */}
      <View className="section">
        <View className="section-title">RichText示例</View>
        <RichText className="rich-text" nodes={richTextNodes} />
      </View>
    </View>
  );
};

export default Basic;
