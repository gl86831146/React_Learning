import { View, Button, Text } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

const Bluetooth = () => {
  const [devices, setDevices] = useState([])
  const [scanning, setScanning] = useState(false)

  const startBluetoothDevicesDiscovery = () => {
    setScanning(true)
    Taro.openBluetoothAdapter({
      success: () => {
        Taro.startBluetoothDevicesDiscovery({
          success: () => {
            Taro.onBluetoothDeviceFound((res) => {
              setDevices(prev => [...prev, ...res.devices])
            })
          },
          fail: (err) => {
            console.error('搜索蓝牙设备失败：', err)
            Taro.showToast({
              title: '搜索失败',
              icon: 'error'
            })
          }
        })
      },
      fail: (err) => {
        console.error('初始化蓝牙适配器失败：', err)
        Taro.showToast({
          title: '蓝牙初始化失败',
          icon: 'error'
        })
      }
    })
  }

  const stopScan = () => {
    setScanning(false)
    Taro.stopBluetoothDevicesDiscovery()
  }

  return (
    <View className='bluetooth-page'>
      <Button 
        onClick={scanning ? stopScan : startBluetoothDevicesDiscovery}
      >
        {scanning ? '停止搜索' : '搜索蓝牙设备'}
      </Button>
      
      <View className='device-list'>
        {devices.map((device, index) => (
          <View key={index} className='device-item'>
            <Text>设备名称: {device.name || '未知设备'}</Text>
            <Text>信号强度: {device.RSSI}dBm</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Bluetooth
