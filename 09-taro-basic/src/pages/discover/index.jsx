import { View, Navigator } from '@tarojs/components'
import './index.scss'
const Discover = () => {
  const features = [
    {
      id: 1,
      title: '记账本',
      path: '/pages/accountBook/index'
    },
    {
      id: 2,
      title: '音乐盒子',
      path: '/pages/musicBox/index'
    },
    {
      id: 3,
      title: '个人名片生成器',
      path: '/pages/businessCardPage/index'
    }
  ]

  return (
    <View className='discover'>
      {features.map(feature => (
        <Navigator
          key={feature.id}
          url={feature.path}
          className='feature-item'
        >
          {feature.title}
        </Navigator>
      ))}
    </View>
  )
}
export default Discover
