import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const Api = () => {
  const apiList = [
    { title: '设备', url: '/pages/device/index' },
    { title: '联系人', url: '/pages/contact/index' },
    { title: '截屏', url: '/pages/screenshot/index' },
    { title: '蓝牙', url: '/pages/bluetooth/index' },
    { title: '剪贴板', url: '/pages/clipboard/index' },
    { title: '网络', url: '/pages/network/index' },
    { title: '扫码', url: '/pages/scanner/index' }
  ]

  const handleClick = (url) => {
    Taro.navigateTo({ url })
  }

  return (
    <View className='api-page'>
      {apiList.map((item, index) => (
        <View
          key={index}
          className='api-item'
          onClick={() => handleClick(item.url)}
        >
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  )
}

export default Api
