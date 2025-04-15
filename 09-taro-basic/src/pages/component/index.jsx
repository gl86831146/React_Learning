import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const Component = () => {
  const menuList = [
    { title: '基础', url: '/pages/basic/index' },
    { title: '容器', url: '/pages/container/index' },
    { title: '表单', url: '/pages/form/index' },
    { title: '地图', url: '/pages/map/index' },
    { title: '位置', url: '/pages/location/index' },
    { title: '媒体组件', url: '/pages/media/index' },
    { title: 'Skyline', url: '/pages/skyline/index' },
    { title: 'Webview', url: '/pages/webview/index' }
  ]

  const handleClick = (url) => {
    Taro.navigateTo({ url })
  }

  return (
    <View className='component-page'>
      {menuList.map((item, index) => (
        <View
          key={index}
          className='menu-item'
          onClick={() => handleClick(item.url)}
        >
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  )
}

export default Component
