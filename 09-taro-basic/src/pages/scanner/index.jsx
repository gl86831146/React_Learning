import { View, Button, Text } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

const Scanner = () => {
  const [scanResult, setScanResult] = useState('')

  const handleScan = () => {
    Taro.scanCode({
      success: (res) => {
        setScanResult(res.result)
        Taro.showToast({
          title: '扫描成功',
          icon: 'success'
        })
      },
      fail: (err) => {
        console.error('扫描失败：', err)
        Taro.showToast({
          title: '扫描失败',
          icon: 'error'
        })
      }
    })
  }

  return (
    <View className='scanner-page'>
      <Button onClick={handleScan}>开始扫码</Button>
      {scanResult && (
        <View className='scan-result'>
          <Text>扫描结果：</Text>
          <Text>{scanResult}</Text>
        </View>
      )}
    </View>
  )
}

export default Scanner
