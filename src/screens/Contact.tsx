import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from '@/features/counter/CounterSlice';
import { RootState } from '@/store/Store';

const Contact = () => {
  const {count} = useSelector((store: RootState) => store.count)
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Count - {count}</Text>
      <Button title="+" onPress={()=> dispatch(increment())} />
      <Button title="-" onPress={()=> dispatch(decrement())} />
      <Button title="Reset" onPress={()=> dispatch(reset())} />
    </View>
  )
}
export default Contact

