import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from '@/features/counter/CounterSlice';
import { AppDispatch, RootState, store } from '@/store/Store';
import { toggleTheme } from '@/features/themeSlice';

const Contact: React.FC = () => {
  const count = useSelector((store: RootState) => store.counter.count);
  const mode = useSelector((store: RootState) => store.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <Text>Count - {count}</Text>
      <Button title="+" onPress={()=> dispatch(increment())} />
      <Button title="-" onPress={()=> dispatch(decrement())} />
      <Button title="Reset" onPress={()=> dispatch(reset())} />
      <Text>{mode}</Text>
      <Button title="Theme" onPress={() => dispatch(toggleTheme())}/>
    </View>
  )
}
export default Contact

