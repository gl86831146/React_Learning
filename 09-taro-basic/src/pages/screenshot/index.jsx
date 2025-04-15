import { View, Button, Image } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

const Screenshot = () => {
  const [screenshotPath, setScreenshotPath] = useState('')

  // 监听截屏事件
  useEffect(() => {
    Taro.onUserCaptureScreen(() => {
      Taro.showToast({
        title: '截屏成功',
        icon: 'success',
        duration: 2000
      })
      handleGetScreenshot()
    })
    
    return () => {
      Taro.offUserCaptureScreen()
    }
  }, [])

  // 获取截图
  const handleGetScreenshot = () => {
    Taro.chooseImage({
      count: 1,
      sourceType: ['album'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0]
        setScreenshotPath(tempFilePath)
      },
      fail: (err) => {
        console.error('获取截图失败：', err)
        Taro.showToast({
          title: '获取截图失败',
          icon: 'error'
        })
      }
    })
  }

  const handleScreenshot = async () => {
    try {
      // 检查相册权限
      const { authSetting } = await Taro.getSetting()
      if (!authSetting['scope.writePhotosAlbum']) {
        await Taro.authorize({ scope: 'scope.writePhotosAlbum' })
      }

      Taro.showModal({
        title: '截屏提示',
        content: '请使用手机自带的截屏功能（如音量键+电源键）进行截屏',
        showCancel: false,
        confirmText: '我知道了'
      })
    } catch (err) {
      console.error('操作失败：', err)
      Taro.showToast({
        title: '操作失败',
        icon: 'error'
      })
    }
  }

  return (
    <View className='screenshot-page'>
      <Button onClick={handleScreenshot}>开始截屏</Button>
      {screenshotPath && (
        <Image 
          src={screenshotPath} 
          mode='widthFix' 
          className='screenshot-image' 
        />
      )}
      <View className='content'>
        <View className='demo-block'>1. 点击上方按钮开始</View>
        <View className='demo-block'>2. 使用手机自带的截屏快捷键</View>
        <View className='demo-block'>3. 截屏后会自动获取截图</View>
      </View>
    </View>
  )
}

export default Screenshot
