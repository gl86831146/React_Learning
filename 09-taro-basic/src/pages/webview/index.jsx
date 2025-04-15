import { WebView } from "@tarojs/components";
import { useState } from 'react';
import Taro from '@tarojs/taro';

const WebViewPage = () => {
  const [loading, setLoading] = useState(true);

  // 处理小程序发来的消息
  const handleMessage = (e) => {
    // e.detail = { data } 消息数据
    console.log('收到小程序消息：', e.detail.data);
    Taro.showToast({
      title: '收到消息',
      icon: 'success'
    });
  };

  // 网页加载完成事件
  const handleLoad = (e) => {
    setLoading(false);
    // e.detail = { src } 网页链接
    console.log('页面加载完成：', e.detail.src);
    Taro.showToast({
      title: '加载完成',
      icon: 'success'
    });
  };

  // 网页加载失败事件
  const handleError = (e) => {
    // e.detail = { src } 失败的网页链接
    console.error('加载失败：', e.detail.src);
    Taro.showToast({
      title: '加载失败',
      icon: 'error'
    });
  };

  return (
    <WebView
      src="https://mp.weixin.qq.com/"
      progressbarColor="#1296db"
      type="im" // 若引入第三方服务，需设置type="im"
      onMessage={handleMessage}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default WebViewPage;