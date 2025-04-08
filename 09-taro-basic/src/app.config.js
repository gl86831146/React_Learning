export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discover/index',
    'pages/profile/index',
    'pages/product/index',
    'pages/login/index',
    'pages/accountBook/index',
    'pages/musicBox/index',
    'pages/businessCardPage/index'
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
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/3.png",
        selectedIconPath: "./assets/tabs/1.png",
      },
    ],
  },
})
