import { View, Button, Text } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

const Network = () => {
  const [networkType, setNetworkType] = useState('')
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    checkNetwork()
    
    Taro.onNetworkStatusChange(res => {
      setNetworkType(res.networkType)
      setIsConnected(res.isConnected)
    })
  }, [])

  const checkNetwork = () => {
    Taro.getNetworkType({
      success: (res) => {
        setNetworkType(res.networkType)
      }
    })
  }

  return (
    <View className='network-page'>
      <View className='network-status'>
        <Text>网络状态: {isConnected ? '已连接' : '未连接'}</Text>
        <Text>网络类型: {networkType}</Text>
      </View>
      <Button onClick={checkNetwork}>
        刷新网络状态
      </Button>
    </View>
  )
}

export default Network
