import { View, Button, Input } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

const Clipboard = () => {
  const [text, setText] = useState('')
  const [clipboardContent, setClipboardContent] = useState('')

  const handleCopy = () => {
    if (!text) {
      Taro.showToast({
        title: '请输入要复制的内容',
        icon: 'none'
      })
      return
    }

    Taro.setClipboardData({
      data: text,
      success: () => {
        Taro.showToast({
          title: '复制成功',
          icon: 'success'
        })
      }
    })
  }

  const handlePaste = () => {
    Taro.getClipboardData({
      success: (res) => {
        setClipboardContent(res.data)
      }
    })
  }

  return (
    <View className='clipboard-page'>
      <Input
        className='input'
        value={text}
        onInput={e => setText(e.detail.value)}
        placeholder='请输入要复制的内容'
      />
      <Button onClick={handleCopy}>复制到剪贴板</Button>
      <Button onClick={handlePaste}>从剪贴板粘贴</Button>
      {clipboardContent && (
        <View className='clipboard-content'>
          剪贴板内容：{clipboardContent}
        </View>
      )}
    </View>
  )
}

export default Clipboard
