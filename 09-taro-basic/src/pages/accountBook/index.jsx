import { View, Text, Input, Button } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

export default function AccountBook() {
  const [records, setRecords] = useState([])
  const [newRecord, setNewRecord] = useState({
    description: '',
    amount: '',
    type: 'expense' // 'expense' 或 'income'
  })

  const handleAddRecord = () => {
    if (!newRecord.description || !newRecord.amount) return
    
    setRecords([...records, {
      ...newRecord,
      id: Date.now(),
      amount: parseFloat(newRecord.amount)
    }])
    
    setNewRecord({
      description: '',
      amount: '',
      type: 'expense'
    })
  }

  const totalBalance = records.reduce((sum, record) => {
    return sum + (record.type === 'income' ? record.amount : -record.amount)
  }, 0)

  return (
    <View className='account-book'>
      <View className='input-section'>
        <Input
          type='text'
          placeholder='描述'
          value={newRecord.description}
          onInput={e => setNewRecord({...newRecord, description: e.detail.value})}
        />
        <Input
          type='digit'
          placeholder='金额'
          value={newRecord.amount}
          onInput={e => setNewRecord({...newRecord, amount: e.detail.value})}
        />
        <View className='type-selector'>
          <Button 
            className={newRecord.type === 'expense' ? 'active' : ''}
            onClick={() => setNewRecord({...newRecord, type: 'expense'})}
          >
            支出
          </Button>
          <Button 
            className={newRecord.type === 'income' ? 'active' : ''}
            onClick={() => setNewRecord({...newRecord, type: 'income'})}
          >
            收入
          </Button>
        </View>
        <Button type='primary' onClick={handleAddRecord}>添加记录</Button>
      </View>

      <View className='balance-section'>
        <Text className='balance-text'>当前余额: ¥{totalBalance.toFixed(2)}</Text>
      </View>

      <View className='records-list'>
        {records.map(record => (
          <View key={record.id} className={`record-item ${record.type}`}>
            <Text>{record.description}</Text>
            <Text>{record.type === 'income' ? '+' : '-'}¥{record.amount.toFixed(2)}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
