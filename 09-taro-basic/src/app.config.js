export default defineAppConfig({
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
  pages: [
    'pages/index/index',
    'pages/discover/index',
    'pages/profile/index',
    'pages/product/index',
    'pages/login/index',
    'pages/accountBook/index',
    'pages/musicBox/index',
    'pages/businessCardPage/index',
    'pages/location/index',
    'pages/map/index',
    'pages/contact/index',
    'pages/container/index',
    'pages/device/index',
    'pages/form/index',
    'pages/media/index',
    'pages/skyline/index',
    'pages/basic/index',
    "pages/component/index",
    'pages/api/index',
    'pages/webview/index',
    'pages/screenshot/index',
    'pages/scanner/index',
    'pages/network/index',
    'pages/clipboard/index',
    'pages/bluetooth/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#4594D5',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: "#999",
    selectedColor: "#1296db",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/2.png",
        selectedIconPath: "./assets/tabs/5.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/4.png",
        selectedIconPath: "./assets/tabs/6.png",
      },
      {
        pagePath: 'pages/component/index',
        text: '组件',
        iconPath: './assets/tabs/7.png',
        selectedIconPath: './assets/tabs/8.png',
      },
      {
        pagePath: 'pages/api/index',
        text: 'API',
        iconPath: './assets/tabs/9.png',
        selectedIconPath: './assets/tabs/10.png',
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/3.png",
        selectedIconPath: "./assets/tabs/1.png",
      }

    ],
  },
})
