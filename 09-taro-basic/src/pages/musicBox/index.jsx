import { View, Text, Image, Button } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

export default function MusicBox() {
  const [songs] = useState([
    {
      id: 1,
      title: '春日宴',
      artist: '许嵩',
      cover: 'https://ts1.tc.mm.bing.net/th/id/R-C.8c0ace659ab03469f5d0e3ccd4e8174b?rik=taeE%2bPvOWF1nFw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn11%2f572%2fw1303h869%2f20180613%2f857c-hcwpcmq0443485.jpg&ehk=VKOo5p6usbGXoLCdda5g2nPTu8Rt91fcE%2f80bMxDfNE%3d&risl=&pid=ImgRaw&r=0',
      src: 'https://music.163.com/song/media/outer/url?id=167876.mp3'
    },
    {
      id: 2,
      title: '有何不可',
      artist: '许嵩',
      cover: 'https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg',
      src: 'https://music.163.com/song/media/outer/url?id=167850.mp3'
    },
    {
      id: 3,
      title: '雅俗共赏',
      artist: '许嵩',
      cover: 'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
      src: 'https://music.163.com/song/media/outer/url?id=411214279.mp3'
    }
  ])

  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioContext] = useState(Taro.createInnerAudioContext())

  useEffect(() => {
    // 音频播放结束事件
    audioContext.onEnded(() => {
      setIsPlaying(false)
    })

    // 音频播放错误事件
    audioContext.onError((res) => {
      Taro.showToast({
        title: '播放失败',
        icon: 'none'
      })
      setIsPlaying(false)
    })

    return () => {
      audioContext.stop()
      audioContext.destroy()
    }
  }, [audioContext])

  const handlePlaySong = (song) => {
    if (currentSong?.id === song.id) {
      togglePlay()
      return
    }

    audioContext.stop()
    setCurrentSong(song)
    audioContext.src = song.src
    audioContext.play()
    setIsPlaying(true)
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioContext.pause()
    } else {
      audioContext.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <View className='music-box'>
      <View className='now-playing'>
        {currentSong ? (
          <>
            <Image
              className={`cover ${isPlaying ? 'rotating' : ''}`}
              src={currentSong.cover}
              mode='aspectFill'
            />
            <Text className='title'>{currentSong.title}</Text>
            <Text className='artist'>{currentSong.artist}</Text>
            <Button onClick={togglePlay} type='primary'>
              {isPlaying ? '暂停' : '播放'}
            </Button>
          </>
        ) : (
          <Text className='no-song'>请选择要播放的歌曲</Text>
        )}
      </View>

      <View className='song-list'>
        {songs.map(song => (
          <View
            key={song.id}
            className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
            onClick={() => handlePlaySong(song)}
          >
            <Image className='song-cover' src={song.cover} mode='aspectFill' />
            <View className='song-info'>
              <Text className='song-title'>{song.title}</Text>
              <Text className='song-artist'>{song.artist}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
